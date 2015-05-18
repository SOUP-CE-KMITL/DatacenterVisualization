var initCustomNode = function(s) {
  (function(undefined) {
    var imgCache = {};

    var drawImage = function(node, x, y, size, context) {
      if (s && node.image && node.image.url) {
        var url = node.image.url;
        var ih = node.image.h || 1; // 1 is arbitrary, anyway only the ratio counts
        var iw = node.image.w || 1;
        var scale = node.image.scale || 1;
        var clip = node.image.clip || 1;

        // create new IMG or get from imgCache
        var image = imgCache[url];
        if (!image) {
          image = document.createElement('IMG');
          image.src = url;
          image.onload = function() {
            s.refresh();
          };
          imgCache[url] = image;
        }

        // calculate position and draw
        var xratio = (iw < ih) ? (iw / ih) : 1;
        var yratio = (ih < iw) ? (ih / iw) : 1;
        var r = size * scale;

        // Draw the clipping disc:
        context.save(); // enter clipping mode
        context.beginPath();
        context.arc(x, y, size * clip, 0, Math.PI * 2, true);
        context.closePath();
        context.clip();

        // Draw the actual image
        context.drawImage(image,
          x + Math.sin(-3.142 / 4) * r * xratio,
          y - Math.cos(-3.142 / 4) * r * yratio,
          r * xratio * 2 * Math.sin(-3.142 / 4) * (-1),
          r * yratio * 2 * Math.cos(-3.142 / 4));
        context.restore(); // exit clipping mode
      }
    };

    sigma.canvas.nodes.vis = function(node, context, settings) {
      var prefix = settings('prefix') || '';

      var x = node[prefix + 'x'];
      var y = node[prefix + 'y'];
      var size = node[prefix + 'size'];

      context.fillStyle = node.color || settings('defaultNodeColor');
      context.beginPath();
      context.arc(
        x,
        y,
        size,
        0,
        Math.PI * 2,
        true
      );

      context.closePath();
      context.fill();

      // Adding a border
      context.lineWidth = node.borderWidth || 1;
      var overallStatus;
      try {
        overallStatus = node.properties.overallStatus;
      } catch (e) {
        overallStatus = "unknown";
      }
      context.strokeStyle = "#" + (overallStatus === "green" ? "3cb878" : overallStatus === "yellow" ? "f7941d" : overallStatus === "red" ? "ed1c24" : "000");
      context.stroke();

      drawImage(node, x, y, size || 1, context);

      //status icon
      if (["ComputeUnit"].some(function(e) {
          return e === node.properties.type;
        })) {
        var status = node.properties.state;
        if (status === "poweredOn") {
          context.beginPath();
          context.moveTo(x + size / 6, y + size / 1.5);
          context.lineTo(x + size / 6, y + size / 1.5 - size / 1.5);
          context.lineTo(x + size / 6 + size / 1.5, y + size / 1.5 - size / 3);
          context.closePath();
          context.fillStyle = "#00B631";
          context.fill();
        } else if (status === "pause") {
          context.fillStyle = "#f7941d";
          context.fillRect(x + size / 6, y + size / 4, size / 6, size / 2);
          context.fillRect(x + size / 6 + size / 4, y + size / 4, size / 6, size / 2);
          context.lineWidth = 1;
          context.strokeStyle = "#fff";
        } else if (status === "poweredOff") {
          context.fillStyle = "#FF0026";
          context.fillRect(x + size / 6, y + size / 4, size / 2, size / 2);
          context.lineWidth = 1;
          context.strokeStyle = "#fff";
        }
      }

      // Badge render
      //drawImage(node, x+size, y-size, size/2, context);
    };

    sigma.canvas.labels.vis = function(node, context, settings) {
      var fontSize,
        prefix = settings('prefix') || '',
        size = node[prefix + 'size'];

      if (size < settings('labelThreshold'))
        return;

      if (!node.label || typeof node.label !== 'string')
        return;

      fontSize = (settings('labelSize') === 'fixed') ?
        settings('defaultLabelSize') :
        settings('labelSizeRatio') * size;

      context.font = (settings('fontStyle') ? settings('fontStyle') + ' ' : '') +
        fontSize + 'px ' + settings('font');
      context.fillStyle = (settings('labelColor') === 'node') ?
        (node.color || settings('defaultNodeColor')) :
        settings('defaultLabelColor');

      var x = node[prefix + 'x'];
      var y = node[prefix + 'y'];
      var dif_x = x - s.getCenter()[prefix + 'x'];
      var dif_y = y - s.getCenter()[prefix + 'y'];
      var theta = Math.atan2(dif_y, dif_x);
      var label = node.label;
      var labelSize = label.length * fontSize / 1.75;


      if (Math.abs(theta) > Math.PI / 2) {
        context.fillText(
          label,
          Math.round(x - labelSize - size),
          Math.round(y + fontSize / 3));
        //Math.round(x-label.length*7-size+3),
        //Math.round(y+fontSize/3));
      } else {
        context.fillText(
          label,
          Math.round(x + size + 10),
          Math.round(y + fontSize / 3));
        //Math.round(x+size+3),
        //Math.round(y+fontSize/3));
      }
    };

    sigma.canvas.hovers.vis = function(node, context, settings) {
      var x,
        y,
        w,
        h,
        e,
        fontStyle = settings('hoverFontStyle') || settings('fontStyle'),
        prefix = settings('prefix') || '',
        size = node[prefix + 'size'],
        fontSize = (settings('labelSize') === 'fixed') ?
        settings('defaultLabelSize') :
        settings('labelSizeRatio') * size;

      // Label background:
      context.font = (fontStyle ? fontStyle + ' ' : '') +
        fontSize + 'px ' + (settings('hoverFont') || settings('font'));

      context.beginPath();
      context.fillStyle = settings('labelHoverBGColor') === 'node' ?
        (node.color || settings('defaultNodeColor')) :
        settings('defaultHoverLabelBGColor');

      if (node.label && settings('labelHoverShadow')) {
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
        context.shadowBlur = 8;
        context.shadowColor = settings('labelHoverShadowColor');
      }

      if (node.label && typeof node.label === 'string') {
        x = Math.round(node[prefix + 'x'] - fontSize / 2 - 2);
        y = Math.round(node[prefix + 'y'] - fontSize / 2 - 2);
        w = Math.round(
          context.measureText(node.label).width + fontSize / 2 + size + 7
        );
        h = Math.round(fontSize + 4);
        e = Math.round(fontSize / 2 + 2);

        context.moveTo(x, y + e);
        context.arcTo(x, y, x + e, y, e);
        context.lineTo(x + w, y);
        context.lineTo(x + w, y + h);
        context.lineTo(x + e, y + h);
        context.arcTo(x, y + h, x, y + h - e, e);
        context.lineTo(x, y + e);

        context.closePath();
        context.fill();

        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
        context.shadowBlur = 0;
      }

      // Node border:
      if (settings('borderSize') > 0) {
        context.beginPath();
        context.fillStyle = settings('nodeBorderColor') === 'node' ?
          (node.color || settings('defaultNodeColor')) :
          settings('defaultNodeBorderColor');
        context.arc(
          node[prefix + 'x'],
          node[prefix + 'y'],
          size + settings('borderSize'),
          0,
          Math.PI * 2,
          true
        );
        context.closePath();
        context.fill();
      }

      // Node:
      var nodeRenderer = sigma.canvas.nodes[node.type] || sigma.canvas.nodes.def;
      nodeRenderer(node, context, settings);

      // Display the label:
      if (node.label && typeof node.label === 'string') {
        context.fillStyle = (settings('labelHoverColor') === 'node') ?
          (node.color || settings('defaultNodeColor')) :
          settings('defaultLabelHoverColor');

        context.fillText(
          node.label,
          Math.round(node[prefix + 'x'] + size + 3),
          Math.round(node[prefix + 'y'] + fontSize / 3)
        );
      }
    };
  }).call(this);
};
