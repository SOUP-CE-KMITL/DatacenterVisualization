function initPerformanceResolver(s) {
  sigma.prototype.resolverPerformanceCounterId = function(counterId) {
    var counterData = [{
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 1,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "usage",
        "label": "Usage",
        "summary": "CPU usage as a percentage during the interval"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 2,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "usage",
        "label": "Usage",
        "summary": "CPU usage as a percentage during the interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 3,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "usage",
        "label": "Usage",
        "summary": "CPU usage as a percentage during the interval"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 4,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "usage",
        "label": "Usage",
        "summary": "CPU usage as a percentage during the interval"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 5,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "usagemhz",
        "label": "Usage in MHz",
        "summary": "CPU usage in megahertz during the interval"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaHertz",
        "label": "MHz",
        "summary": "Megahertz"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 6,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "usagemhz",
        "label": "Usage in MHz",
        "summary": "CPU usage in megahertz during the interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaHertz",
        "label": "MHz",
        "summary": "Megahertz"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 7,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "usagemhz",
        "label": "Usage in MHz",
        "summary": "CPU usage in megahertz during the interval"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaHertz",
        "label": "MHz",
        "summary": "Megahertz"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 8,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "usagemhz",
        "label": "Usage in MHz",
        "summary": "CPU usage in megahertz during the interval"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaHertz",
        "label": "MHz",
        "summary": "Megahertz"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 9,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "reservedCapacity",
        "label": "Reserved capacity",
        "summary": "Total CPU capacity reserved by virtual machines"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaHertz",
        "label": "MHz",
        "summary": "Megahertz"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 10,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "system",
        "label": "System",
        "summary": "Amount of time spent on system processes on each virtual CPU in the virtual machine"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 11,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "wait",
        "label": "Wait",
        "summary": "Total CPU time spent in wait state"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 12,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "ready",
        "label": "Ready",
        "summary": "Percentage of time that the virtual machine was ready, but could not get scheduled to run on the physical CPU"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 13,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "idle",
        "label": "Idle",
        "summary": "Total time that the CPU spent in an idle state"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 14,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "used",
        "label": "Used",
        "summary": "Total CPU usage"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 15,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "capacity.provisioned",
        "label": "CPU Capacity Provisioned",
        "summary": "Capacity in MHz of the physical CPU cores"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaHertz",
        "label": "MHz",
        "summary": "Megahertz"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 16,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "capacity.entitlement",
        "label": "CPU Capacity Entitlement",
        "summary": "CPU resources devoted by the ESX scheduler to virtual machines and resource pools"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaHertz",
        "label": "MHz",
        "summary": "Megahertz"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 17,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "capacity.usage",
        "label": "CPU Capacity Usage",
        "summary": "CPU usage in MHz during the interval"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaHertz",
        "label": "MHz",
        "summary": "Megahertz"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 18,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "capacity.demand",
        "label": "CPU Capacity Demand",
        "summary": "The amount of CPU resources the virtual machines on this host would use if there were no CPU contention or CPU limit"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaHertz",
        "label": "MHz",
        "summary": "Megahertz"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 19,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "capacity.contention",
        "label": "CPU Capacity Contention",
        "summary": "Percent of time the virtual machines on this host are unable to run because they are contending for access to the physical CPU(s)"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 20,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "corecount.provisioned",
        "label": "CPU Core Count Provisioned",
        "summary": "The number of physical cores provisioned to the entity"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 21,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "corecount.usage",
        "label": "CPU Core Count Usage",
        "summary": "The number of virtual processors running on the host"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 22,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "corecount.contention",
        "label": "CPU Core Count Contention",
        "summary": "Time the virtual machine is ready to run, but is unable to run due to co-scheduling constraints"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 23,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "usage",
        "label": "Usage",
        "summary": "Memory usage as percentage of total configured or available memory"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 24,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "usage",
        "label": "Usage",
        "summary": "Memory usage as percentage of total configured or available memory"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 25,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "usage",
        "label": "Usage",
        "summary": "Memory usage as percentage of total configured or available memory"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 26,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "usage",
        "label": "Usage",
        "summary": "Memory usage as percentage of total configured or available memory"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 27,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "reservedCapacity",
        "label": "Reserved capacity",
        "summary": "Total amount of memory reservation used by powered-on virtual machines and vSphere services on the host"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaBytes",
        "label": "MB",
        "summary": "Megabytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 28,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "granted",
        "label": "Granted",
        "summary": "Amount of host physical memory or physical memory that is mapped for a virtual machine or a host"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 29,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "granted",
        "label": "Granted",
        "summary": "Amount of host physical memory or physical memory that is mapped for a virtual machine or a host"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 30,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "granted",
        "label": "Granted",
        "summary": "Amount of host physical memory or physical memory that is mapped for a virtual machine or a host"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 31,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "granted",
        "label": "Granted",
        "summary": "Amount of host physical memory or physical memory that is mapped for a virtual machine or a host"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 32,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "active",
        "label": "Active",
        "summary": "Amount of memory that is actively used, as estimated by VMkernel based on recently touched memory pages"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 33,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "active",
        "label": "Active",
        "summary": "Amount of memory that is actively used, as estimated by VMkernel based on recently touched memory pages"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 34,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "active",
        "label": "Active",
        "summary": "Amount of memory that is actively used, as estimated by VMkernel based on recently touched memory pages"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 35,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "active",
        "label": "Active",
        "summary": "Amount of memory that is actively used, as estimated by VMkernel based on recently touched memory pages"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 36,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "shared",
        "label": "Shared",
        "summary": "Amount of guest physical memory that is shared with other virtual machines, relative to a single virtual machine or to all powered-on virtual machines on a host"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 37,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "shared",
        "label": "Shared",
        "summary": "Amount of guest physical memory that is shared with other virtual machines, relative to a single virtual machine or to all powered-on virtual machines on a host"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 38,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "shared",
        "label": "Shared",
        "summary": "Amount of guest physical memory that is shared with other virtual machines, relative to a single virtual machine or to all powered-on virtual machines on a host"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 39,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "shared",
        "label": "Shared",
        "summary": "Amount of guest physical memory that is shared with other virtual machines, relative to a single virtual machine or to all powered-on virtual machines on a host"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 40,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "zero",
        "label": "Zero",
        "summary": "Memory that contains 0s only"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 41,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "zero",
        "label": "Zero",
        "summary": "Memory that contains 0s only"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 42,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "zero",
        "label": "Zero",
        "summary": "Memory that contains 0s only"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 43,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "zero",
        "label": "Zero",
        "summary": "Memory that contains 0s only"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 44,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "unreserved",
        "label": "Unreserved",
        "summary": "Amount of memory that is unreserved"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 45,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "unreserved",
        "label": "Unreserved",
        "summary": "Amount of memory that is unreserved"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 46,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "unreserved",
        "label": "Unreserved",
        "summary": "Amount of memory that is unreserved"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 47,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "unreserved",
        "label": "Unreserved",
        "summary": "Amount of memory that is unreserved"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 48,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapused",
        "label": "Swap used",
        "summary": "Amount of memory that is used by swap"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 49,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapused",
        "label": "Swap used",
        "summary": "Amount of memory that is used by swap"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 50,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapused",
        "label": "Swap used",
        "summary": "Amount of memory that is used by swap"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 51,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapused",
        "label": "Swap used",
        "summary": "Amount of memory that is used by swap"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 52,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapunreserved",
        "label": "Swap unreserved",
        "summary": "Amount of memory that is unreserved by swap"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 53,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapunreserved",
        "label": "Swap unreserved",
        "summary": "Amount of memory that is unreserved by swap"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 54,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapunreserved",
        "label": "Swap unreserved",
        "summary": "Amount of memory that is unreserved by swap"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 55,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapunreserved",
        "label": "Swap unreserved",
        "summary": "Amount of memory that is unreserved by swap"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 56,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sharedcommon",
        "label": "Shared common",
        "summary": "Amount of machine memory that is shared by all powered-on virtual machines and vSphere services on the host"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 57,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sharedcommon",
        "label": "Shared common",
        "summary": "Amount of machine memory that is shared by all powered-on virtual machines and vSphere services on the host"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 58,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sharedcommon",
        "label": "Shared common",
        "summary": "Amount of machine memory that is shared by all powered-on virtual machines and vSphere services on the host"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 59,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sharedcommon",
        "label": "Shared common",
        "summary": "Amount of machine memory that is shared by all powered-on virtual machines and vSphere services on the host"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 60,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "heap",
        "label": "Heap",
        "summary": "VMkernel virtual address space dedicated to VMkernel main heap and related data"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 61,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "heap",
        "label": "Heap",
        "summary": "VMkernel virtual address space dedicated to VMkernel main heap and related data"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 62,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "heap",
        "label": "Heap",
        "summary": "VMkernel virtual address space dedicated to VMkernel main heap and related data"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 63,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "heap",
        "label": "Heap",
        "summary": "VMkernel virtual address space dedicated to VMkernel main heap and related data"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 64,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "heapfree",
        "label": "Heap free",
        "summary": "Free address space in the VMkernel main heap"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 65,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "heapfree",
        "label": "Heap free",
        "summary": "Free address space in the VMkernel main heap"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 66,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "heapfree",
        "label": "Heap free",
        "summary": "Free address space in the VMkernel main heap"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 67,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "heapfree",
        "label": "Heap free",
        "summary": "Free address space in the VMkernel main heap"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 68,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "state",
        "label": "State",
        "summary": "One of four threshold levels representing the percentage of free memory on the host. The counter value determines swapping and ballooning behavior for memory reclamation."
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 69,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapped",
        "label": "Swapped",
        "summary": "Current amount of guest physical memory swapped out to the virtual machine swap file by the VMkernel"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 70,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapped",
        "label": "Swapped",
        "summary": "Current amount of guest physical memory swapped out to the virtual machine swap file by the VMkernel"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 71,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapped",
        "label": "Swapped",
        "summary": "Current amount of guest physical memory swapped out to the virtual machine swap file by the VMkernel"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 72,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapped",
        "label": "Swapped",
        "summary": "Current amount of guest physical memory swapped out to the virtual machine swap file by the VMkernel"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 73,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swaptarget",
        "label": "Swap target",
        "summary": "Target size for the virtual machine swap file"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 74,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swaptarget",
        "label": "Swap target",
        "summary": "Target size for the virtual machine swap file"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 75,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swaptarget",
        "label": "Swap target",
        "summary": "Target size for the virtual machine swap file"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 76,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swaptarget",
        "label": "Swap target",
        "summary": "Target size for the virtual machine swap file"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 77,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapIn",
        "label": "swapIn",
        "summary": "swapIn"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 78,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapIn",
        "label": "swapIn",
        "summary": "swapIn"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 79,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapIn",
        "label": "swapIn",
        "summary": "swapIn"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 80,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapIn",
        "label": "swapIn",
        "summary": "swapIn"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 81,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapOut",
        "label": "swapOut",
        "summary": "swapOut"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 82,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapOut",
        "label": "swapOut",
        "summary": "swapOut"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 83,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapOut",
        "label": "swapOut",
        "summary": "swapOut"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 84,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapOut",
        "label": "swapOut",
        "summary": "swapOut"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 85,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapinRate",
        "label": "Swap in rate",
        "summary": "Rate at which memory is swapped from disk into active memory during the interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 86,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapoutRate",
        "label": "Swap out rate",
        "summary": "Rate at which memory is being swapped from active memory to disk during the current interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "managementAgent",
        "label": "Management agent",
        "summary": "Management agent"
      },
      "key": 87,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapOut",
        "label": "Memory swap out",
        "summary": "Amount of memory that is swapped out for the Service Console"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "managementAgent",
        "label": "Management agent",
        "summary": "Management agent"
      },
      "key": 88,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapIn",
        "label": "Memory swap in",
        "summary": "Amount of memory that is swapped in for the Service Console"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 89,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmmemctl",
        "label": "Balloon",
        "summary": "Amount of memory allocated by the virtual machine memory control driver (vmmemctl), which is installed with VMware Tools"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 90,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmmemctl",
        "label": "Balloon",
        "summary": "Amount of memory allocated by the virtual machine memory control driver (vmmemctl), which is installed with VMware Tools"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 91,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmmemctl",
        "label": "Balloon",
        "summary": "Amount of memory allocated by the virtual machine memory control driver (vmmemctl), which is installed with VMware Tools"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 92,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmmemctl",
        "label": "Balloon",
        "summary": "Amount of memory allocated by the virtual machine memory control driver (vmmemctl), which is installed with VMware Tools"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 93,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmmemctltarget",
        "label": "Balloon target",
        "summary": "Target value set by VMkernal for the virtual machine's memory balloon size"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 94,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmmemctltarget",
        "label": "Balloon target",
        "summary": "Target value set by VMkernal for the virtual machine's memory balloon size"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 95,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmmemctltarget",
        "label": "Balloon target",
        "summary": "Target value set by VMkernal for the virtual machine's memory balloon size"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 96,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmmemctltarget",
        "label": "Balloon target",
        "summary": "Target value set by VMkernal for the virtual machine's memory balloon size"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 97,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "consumed",
        "label": "Consumed",
        "summary": "Amount of host physical memory consumed by a virtual machine, host, or cluster"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 98,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "consumed",
        "label": "Consumed",
        "summary": "Amount of host physical memory consumed by a virtual machine, host, or cluster"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 99,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "consumed",
        "label": "Consumed",
        "summary": "Amount of host physical memory consumed by a virtual machine, host, or cluster"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 100,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "consumed",
        "label": "Consumed",
        "summary": "Amount of host physical memory consumed by a virtual machine, host, or cluster"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 101,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "overhead",
        "label": "Overhead",
        "summary": "Host physical memory (KB) consumed by the virtualization infrastructure for running the virtual machine"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 102,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "overhead",
        "label": "Overhead",
        "summary": "Host physical memory (KB) consumed by the virtualization infrastructure for running the virtual machine"
      },
      "perDeviceLevel": 1,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 103,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "overhead",
        "label": "Overhead",
        "summary": "Host physical memory (KB) consumed by the virtualization infrastructure for running the virtual machine"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 104,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "overhead",
        "label": "Overhead",
        "summary": "Host physical memory (KB) consumed by the virtualization infrastructure for running the virtual machine"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 105,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "compressed",
        "label": "Compressed",
        "summary": "Amount of guest physical memory compressed by ESX/ESXi"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 106,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "compressionRate",
        "label": "Compression rate",
        "summary": "Rate of memory compression for the virtual machine"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 107,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "decompressionRate",
        "label": "Decompression rate",
        "summary": "Rate of memory decompression for the virtual machine"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 108,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "capacity.provisioned",
        "label": "Memory Capacity Provisioned",
        "summary": "Total amount of guest physical memory configured for the virtual machine"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 109,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "capacity.entitlement",
        "label": "Memory Capacity Entitlement",
        "summary": "Amount of host physical memory the virtual machine is entitled to, as determined by the ESX scheduler"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 110,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "capacity.usable",
        "label": "Memory Capacity Usable",
        "summary": "Amount of host physical memory available for use by virtual machines on this host"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 111,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "capacity.usage",
        "label": "Memory Capacity Usage",
        "summary": "Amount of host physical memory actively used"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 112,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "capacity.contention",
        "label": "Memory Capacity Contention",
        "summary": "Percentage of time the virtual machine is waiting to access swapped, compressed or ballooned memory"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 113,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "capacity.usage.vm",
        "label": "vm",
        "summary": "vm"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 114,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "capacity.usage.vmOvrhd",
        "label": "vmOvrhd",
        "summary": "vmOvrhd"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 115,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "capacity.usage.vmkOvrhd",
        "label": "vmkOvrhd",
        "summary": "vmkOvrhd"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 116,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "capacity.usage.userworld",
        "label": "userworld",
        "summary": "userworld"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 117,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "reservedCapacity.vm",
        "label": "vm",
        "summary": "vm"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 118,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "reservedCapacity.vmOvhd",
        "label": "vmOvhd",
        "summary": "vmOvhd"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 119,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "reservedCapacity.vmkOvrhd",
        "label": "vmkOvrhd",
        "summary": "vmkOvrhd"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 120,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "reservedCapacity.userworld",
        "label": "userworld",
        "summary": "userworld"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 121,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "reservedCapacityPct",
        "label": "Memory Reserved Capacity %",
        "summary": "Percent of memory that has been reserved either through VMkernel use, by userworlds, or due to virtual machine memory reservations"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 122,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "consumed.vms",
        "label": "Memory Consumed by VMs",
        "summary": "Amount of host physical memory consumed by virtual machines on this host"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 123,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "consumed.userworlds",
        "label": "Memory Consumed by userworlds",
        "summary": "Amount of host physical memory consumed by userworlds on this host"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 124,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "usage",
        "label": "Usage",
        "summary": "Aggregated disk I/O rate. For hosts, this metric includes the rates for all virtual machines running on the host during the collection interval."
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 125,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "usage",
        "label": "Usage",
        "summary": "Aggregated disk I/O rate. For hosts, this metric includes the rates for all virtual machines running on the host during the collection interval."
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 126,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "usage",
        "label": "Usage",
        "summary": "Aggregated disk I/O rate. For hosts, this metric includes the rates for all virtual machines running on the host during the collection interval."
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 127,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "usage",
        "label": "Usage",
        "summary": "Aggregated disk I/O rate. For hosts, this metric includes the rates for all virtual machines running on the host during the collection interval."
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 128,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numberRead",
        "label": "Read requests",
        "summary": "Number of disk reads during the collection interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 129,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numberWrite",
        "label": "Write requests",
        "summary": "Number of disk writes during the collection interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 130,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "read",
        "label": "Read rate",
        "summary": "Average number of kilobytes read from the disk each second during the collection interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 131,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "write",
        "label": "Write rate",
        "summary": "Average number of kilobytes written to disk each second during the collection interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 132,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "totalLatency",
        "label": "Command latency",
        "summary": "Average amount of time taken during the collection interval to process a SCSI command issued by the guest OS to the virtual machine"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 133,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "maxTotalLatency",
        "label": "Highest latency",
        "summary": "Highest latency value across all disks used by the host"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 134,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "commandsAborted",
        "label": "Commands aborted",
        "summary": "Number of SCSI commands aborted during the collection interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 135,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "busResets",
        "label": "Bus resets",
        "summary": "Number of SCSI-bus reset commands issued during the collection interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 136,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numberReadAveraged",
        "label": "Average read requests per second",
        "summary": "Average number of disk reads per second during the collection interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 137,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numberWriteAveraged",
        "label": "Average write requests per second",
        "summary": "Average number of disk writes per second during the collection interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 138,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "throughput.usage",
        "label": "Disk Throughput Usage",
        "summary": "Aggregated disk I/O rate"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 139,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "throughput.contention",
        "label": "Disk Throughput Contention",
        "summary": "Average amount of time for an I/O operation to complete"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 140,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "scsiReservationConflicts",
        "label": "Disk SCSI Reservation Conflicts",
        "summary": "Number of SCSI reservation conflicts for the LUN during the collection interval"
      },
      "perDeviceLevel": 2,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 141,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "scsiReservationCnflctsPct",
        "label": "Disk SCSI Reservation Conflicts %",
        "summary": "Number of SCSI reservation conflicts for the LUN as a percent of total commands during the collection interval"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 142,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "usage",
        "label": "Usage",
        "summary": "Network utilization (combined transmit-rates and receive-rates) during the interval"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 143,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "usage",
        "label": "Usage",
        "summary": "Network utilization (combined transmit-rates and receive-rates) during the interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 144,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "usage",
        "label": "Usage",
        "summary": "Network utilization (combined transmit-rates and receive-rates) during the interval"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 145,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "usage",
        "label": "Usage",
        "summary": "Network utilization (combined transmit-rates and receive-rates) during the interval"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 146,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "packetsRx",
        "label": "Packets received",
        "summary": "Number of packets received during the interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 147,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "packetsTx",
        "label": "Packets transmitted",
        "summary": "Number of packets transmitted during the interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 148,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "received",
        "label": "Data receive rate",
        "summary": "Average rate at which data was received during the interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 149,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "transmitted",
        "label": "Data transmit rate",
        "summary": "Average rate at which data was transmitted during the interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 150,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "throughput.provisioned",
        "label": "pNic Throughput Provisioned",
        "summary": "Provisioned pNic I/O Throughput"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 151,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "throughput.usable",
        "label": "pNic Throughput Usable",
        "summary": "Usable pNic I/O Throughput"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 152,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "throughput.usage",
        "label": "vNic Throughput Usage",
        "summary": "Average vNic I/O rate"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 153,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "throughput.contention",
        "label": "vNic Throughput Contention",
        "summary": "Count of vNic packet drops"
      },
      "perDeviceLevel": 4,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 154,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "throughput.packetsPerSec",
        "label": "pNic Packets Received and Transmitted per Second",
        "summary": "Average rate of packets received and transmitted per second"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 155,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "uptime",
        "label": "Uptime",
        "summary": "Total time elapsed, in seconds, since last system startup"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "second",
        "label": "Second",
        "summary": "Second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 156,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "heartbeat",
        "label": "Heartbeat",
        "summary": "Number of heartbeats issued per virtual machine during the interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "power",
        "label": "Power",
        "summary": "Power"
      },
      "key": 157,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "power",
        "label": "Usage",
        "summary": "Current power usage"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "watt",
        "label": "Watt",
        "summary": "Watt"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "power",
        "label": "Power",
        "summary": "Power"
      },
      "key": 158,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "powerCap",
        "label": "Cap",
        "summary": "Maximum allowed power usage"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "watt",
        "label": "Watt",
        "summary": "Watt"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "power",
        "label": "Power",
        "summary": "Power"
      },
      "key": 159,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "energy",
        "label": "Energy usage",
        "summary": "Total energy used since last stats reset"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "joule",
        "label": "Joule",
        "summary": "Joule"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "power",
        "label": "Power",
        "summary": "Power"
      },
      "key": 160,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "capacity.usagePct",
        "label": "Host Power Capacity Provisioned",
        "summary": "Current power usage as a percentage of maximum allowed power"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storageAdapter",
        "label": "Storage adapter",
        "summary": "Storage adapter"
      },
      "key": 161,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "commandsAveraged",
        "label": "Average commands issued per second",
        "summary": "Average number of commands issued per second by the storage adapter during the collection interval"
      },
      "perDeviceLevel": 2,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storageAdapter",
        "label": "Storage adapter",
        "summary": "Storage adapter"
      },
      "key": 162,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numberReadAveraged",
        "label": "Average read requests per second",
        "summary": "Average number of read commands issued per second by the storage adapter during the collection interval"
      },
      "perDeviceLevel": 2,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storageAdapter",
        "label": "Storage adapter",
        "summary": "Storage adapter"
      },
      "key": 163,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numberWriteAveraged",
        "label": "Average write requests per second",
        "summary": "Average number of write commands issued per second by the storage adapter during the collection interval"
      },
      "perDeviceLevel": 2,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storageAdapter",
        "label": "Storage adapter",
        "summary": "Storage adapter"
      },
      "key": 164,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "read",
        "label": "Read rate",
        "summary": "Rate of reading data by the storage adapter"
      },
      "perDeviceLevel": 2,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storageAdapter",
        "label": "Storage adapter",
        "summary": "Storage adapter"
      },
      "key": 165,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "write",
        "label": "Write rate",
        "summary": "Rate of writing data by the storage adapter"
      },
      "perDeviceLevel": 2,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storageAdapter",
        "label": "Storage adapter",
        "summary": "Storage adapter"
      },
      "key": 166,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "totalReadLatency",
        "label": "Read latency",
        "summary": "The average time a read by the storage adapter takes"
      },
      "perDeviceLevel": 2,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storageAdapter",
        "label": "Storage adapter",
        "summary": "Storage adapter"
      },
      "key": 167,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "totalWriteLatency",
        "label": "Write latency",
        "summary": "The average time a write by the storage adapter takes"
      },
      "perDeviceLevel": 2,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storageAdapter",
        "label": "Storage adapter",
        "summary": "Storage adapter"
      },
      "key": 168,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "maxTotalLatency",
        "label": "Highest latency",
        "summary": "Highest latency value across all storage adapters used by the host"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storageAdapter",
        "label": "Storage adapter",
        "summary": "Storage adapter"
      },
      "key": 169,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "throughput.cont",
        "label": "Storage Adapter Throughput Contention",
        "summary": "Average amount of time for an I/O operation to complete"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storageAdapter",
        "label": "Storage adapter",
        "summary": "Storage adapter"
      },
      "key": 170,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "OIOsPct",
        "label": "Storage Adapter Outstanding I/Os",
        "summary": "The percent of I/Os that have been issued but have not yet completed"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "virtualDisk",
        "label": "Virtual disk",
        "summary": "Virtual disk"
      },
      "key": 171,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numberReadAveraged",
        "label": "Average read requests per second",
        "summary": "Average number of read commands issued per second to the virtual disk during the collection interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "virtualDisk",
        "label": "Virtual disk",
        "summary": "Virtual disk"
      },
      "key": 172,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numberWriteAveraged",
        "label": "Average write requests per second",
        "summary": "Average number of write commands issued per second to the virtual disk during the collection interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "virtualDisk",
        "label": "Virtual disk",
        "summary": "Virtual disk"
      },
      "key": 173,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "read",
        "label": "Read rate",
        "summary": "Rate of reading data from the virtual disk"
      },
      "perDeviceLevel": 2,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "virtualDisk",
        "label": "Virtual disk",
        "summary": "Virtual disk"
      },
      "key": 174,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "write",
        "label": "Write rate",
        "summary": "Rate of writing data to the virtual disk"
      },
      "perDeviceLevel": 2,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "virtualDisk",
        "label": "Virtual disk",
        "summary": "Virtual disk"
      },
      "key": 175,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "totalReadLatency",
        "label": "Read latency",
        "summary": "The average time a read from the virtual disk takes"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "virtualDisk",
        "label": "Virtual disk",
        "summary": "Virtual disk"
      },
      "key": 176,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "totalWriteLatency",
        "label": "Write latency",
        "summary": "The average time a write to the virtual disk takes"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "virtualDisk",
        "label": "Virtual disk",
        "summary": "Virtual disk"
      },
      "key": 177,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "throughput.cont",
        "label": "Virtual Disk Throughput Contention",
        "summary": "Average amount of time for an I/O operation to complete"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 178,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numberReadAveraged",
        "label": "Average read requests per second",
        "summary": "Average number of read commands issued per second to the datastore during the collection interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 179,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numberWriteAveraged",
        "label": "Average write requests per second",
        "summary": "Average number of write commands issued per second to the datastore during the collection interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 180,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "read",
        "label": "Read rate",
        "summary": "Rate of reading data from the datastore"
      },
      "perDeviceLevel": 2,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 181,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "write",
        "label": "Write rate",
        "summary": "Rate of writing data to the datastore"
      },
      "perDeviceLevel": 2,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 182,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "totalReadLatency",
        "label": "Read latency",
        "summary": "The average time a read from the datastore takes"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 183,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "totalWriteLatency",
        "label": "Write latency",
        "summary": "The average time a write to the datastore takes"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 184,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "maxTotalLatency",
        "label": "Highest latency",
        "summary": "Highest latency value across all datastores used by the host"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 185,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastoreIops",
        "label": "Storage I/O Control aggregated IOPS",
        "summary": "Storage I/O Control aggregated IOPS"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 186,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sizeNormalizedDatastoreLatency",
        "label": "Storage I/O Control normalized latency",
        "summary": "Storage I/O Control size-normalized I/O latency"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "microsecond",
        "label": "Microsecond",
        "summary": "Microsecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 187,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "throughput.usage",
        "label": "usage",
        "summary": "usage"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 188,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "throughput.contention",
        "label": "contention",
        "summary": "contention"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 189,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "busResets",
        "label": "busResets",
        "summary": "busResets"
      },
      "perDeviceLevel": 2,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 190,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "commandsAborted",
        "label": "commandsAborted",
        "summary": "commandsAborted"
      },
      "perDeviceLevel": 2,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 191,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "siocActiveTimePercentage",
        "label": "Storage I/O Control active time percentage",
        "summary": "Percentage of time Storage I/O Control actively controlled datastore latency"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storagePath",
        "label": "Storage path",
        "summary": "Storage path"
      },
      "key": 192,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "throughput.cont",
        "label": "Storage Path Throughput Contention",
        "summary": "Average amount of time for an I/O operation to complete"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storagePath",
        "label": "Storage path",
        "summary": "Storage path"
      },
      "key": 193,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "maxTotalLatency",
        "label": "Highest latency",
        "summary": "Highest latency value across all storage paths used by the host"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "virtualDisk",
        "label": "Virtual disk",
        "summary": "Virtual disk"
      },
      "key": 194,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "throughput.usage",
        "label": "Virtual Disk Throughput Usage",
        "summary": "Virtual disk I/O rate"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "virtualDisk",
        "label": "Virtual disk",
        "summary": "Virtual disk"
      },
      "key": 195,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "commandsAborted",
        "label": "Number of virtual disk terminations",
        "summary": "Number of aborts to a virtual disk"
      },
      "perDeviceLevel": 4,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "virtualDisk",
        "label": "Virtual disk",
        "summary": "Virtual disk"
      },
      "key": 196,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "busResets",
        "label": "Number of virtual disk resets",
        "summary": "Number of virtual disk reset operations"
      },
      "perDeviceLevel": 4,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storageAdapter",
        "label": "Storage adapter",
        "summary": "Storage adapter"
      },
      "key": 197,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "outstandingIOs",
        "label": "Storage Adapter Outstanding I/Os",
        "summary": "The number of I/Os that have been issued but have not yet completed"
      },
      "perDeviceLevel": 2,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storageAdapter",
        "label": "Storage adapter",
        "summary": "Storage adapter"
      },
      "key": 198,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "queued",
        "label": "Storage Adapter Number Queued",
        "summary": "The current number of I/Os that are waiting to be issued"
      },
      "perDeviceLevel": 2,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storageAdapter",
        "label": "Storage adapter",
        "summary": "Storage adapter"
      },
      "key": 199,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "queueDepth",
        "label": "Storage Adapter Queue Depth",
        "summary": "The maximum number of I/Os that can be outstanding at a given time"
      },
      "perDeviceLevel": 2,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storageAdapter",
        "label": "Storage adapter",
        "summary": "Storage adapter"
      },
      "key": 200,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "queueLatency",
        "label": "Storage Adapter Queue Command Latency",
        "summary": "Average amount of time spent in the VMkernel queue, per SCSI command, during the collection interval"
      },
      "perDeviceLevel": 2,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storageAdapter",
        "label": "Storage adapter",
        "summary": "Storage adapter"
      },
      "key": 201,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "throughput.usag",
        "label": "Storage Adapter Throughput Usage",
        "summary": "The storage adapter I/O rate"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storagePath",
        "label": "Storage path",
        "summary": "Storage path"
      },
      "key": 202,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "busResets",
        "label": "Storage Path Bus Resets",
        "summary": "Number of SCSI-bus reset commands issued during the collection interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storagePath",
        "label": "Storage path",
        "summary": "Storage path"
      },
      "key": 203,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "commandsAborted",
        "label": "Storage Path Command Aborts",
        "summary": "Number of SCSI commands aborted during the collection interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storagePath",
        "label": "Storage path",
        "summary": "Storage path"
      },
      "key": 204,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "throughput.usage",
        "label": "Storage Path Throughput Usage",
        "summary": "Storage path I/O rate"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 205,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "throughput.usage.vm",
        "label": "pNic Throughput Usage for VMs",
        "summary": "Average pNic I/O rate for VMs"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 206,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "throughput.usage.nfs",
        "label": "pNic Throughput Usage for NFS",
        "summary": "Average pNic I/O rate for NFS"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 207,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "throughput.usage.vmotion",
        "label": "pNic Throughput Usage for vMotion",
        "summary": "Average pNic I/O rate for vMotion"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 208,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "throughput.usage.ft",
        "label": "pNic Throughput Usage for FT",
        "summary": "Average pNic I/O rate for FT"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 209,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "throughput.usage.iscsi",
        "label": "pNic Throughput Usage for iSCSI",
        "summary": "Average pNic I/O rate for iSCSI"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 210,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "throughput.usage.hbr",
        "label": "pNic Throughput Usage for HBR",
        "summary": "Average pNic I/O rate for HBR"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "power",
        "label": "Power",
        "summary": "Power"
      },
      "key": 211,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "capacity.usable",
        "label": "Host Power Capacity Usable",
        "summary": "Current maximum allowed power usage"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "watt",
        "label": "Watt",
        "summary": "Watt"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "power",
        "label": "Power",
        "summary": "Power"
      },
      "key": 212,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "capacity.usage",
        "label": "Power Capacity Usage",
        "summary": "Current power usage"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "watt",
        "label": "Watt",
        "summary": "Watt"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 213,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpuentitlement",
        "label": "Worst case allocation",
        "summary": "Amount of CPU resources allocated to the virtual machine or resource pool, based on the total cluster capacity and the resource configuration of the resource hierarchy"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaHertz",
        "label": "MHz",
        "summary": "Megahertz"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 214,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mementitlement",
        "label": "Worst case allocation",
        "summary": "Memory allocation as calculated by the VMkernel scheduler based on current estimated demand and reservation, limit, and shares policies set for all virtual machines and resource pools in the host or cluster"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaBytes",
        "label": "MB",
        "summary": "Megabytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "clusterServices",
        "label": "Cluster services",
        "summary": "Cluster services"
      },
      "key": 215,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpufairness",
        "label": "CPU fairness",
        "summary": "Fairness of distributed CPU resource allocation"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "clusterServices",
        "label": "Cluster services",
        "summary": "Cluster services"
      },
      "key": 216,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "memfairness",
        "label": "Memory fairness",
        "summary": "Aggregate available memory resources of all the hosts within a cluster"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmop",
        "label": "Virtual machine operations",
        "summary": "Virtual machine operations"
      },
      "key": 217,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numPoweron",
        "label": "VM power on count",
        "summary": "Number of virtual machine power on operations"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmop",
        "label": "Virtual machine operations",
        "summary": "Virtual machine operations"
      },
      "key": 218,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numPoweroff",
        "label": "VM power off count",
        "summary": "Number of virtual machine power off operations"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmop",
        "label": "Virtual machine operations",
        "summary": "Virtual machine operations"
      },
      "key": 219,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numSuspend",
        "label": "VM suspend count",
        "summary": "Number of virtual machine suspend operations"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmop",
        "label": "Virtual machine operations",
        "summary": "Virtual machine operations"
      },
      "key": 220,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numReset",
        "label": "VM reset count",
        "summary": "Number of virtual machine reset operations"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmop",
        "label": "Virtual machine operations",
        "summary": "Virtual machine operations"
      },
      "key": 221,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numRebootGuest",
        "label": "VM guest reboot count",
        "summary": "Number of virtual machine guest reboot operations"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmop",
        "label": "Virtual machine operations",
        "summary": "Virtual machine operations"
      },
      "key": 222,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numStandbyGuest",
        "label": "VM standby guest count",
        "summary": "Number of virtual machine standby guest operations"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmop",
        "label": "Virtual machine operations",
        "summary": "Virtual machine operations"
      },
      "key": 223,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numShutdownGuest",
        "label": "VM guest shutdown count",
        "summary": "Number of virtual machine guest shutdown operations"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmop",
        "label": "Virtual machine operations",
        "summary": "Virtual machine operations"
      },
      "key": 224,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numCreate",
        "label": "VM create count",
        "summary": "Number of virtual machine create operations"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmop",
        "label": "Virtual machine operations",
        "summary": "Virtual machine operations"
      },
      "key": 225,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numDestroy",
        "label": "VM delete count",
        "summary": "Number of virtual machine delete operations"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmop",
        "label": "Virtual machine operations",
        "summary": "Virtual machine operations"
      },
      "key": 226,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numRegister",
        "label": "VM register count",
        "summary": "Number of virtual machine register operations"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmop",
        "label": "Virtual machine operations",
        "summary": "Virtual machine operations"
      },
      "key": 227,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numUnregister",
        "label": "VM unregister count",
        "summary": "Number of virtual machine unregister operations"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmop",
        "label": "Virtual machine operations",
        "summary": "Virtual machine operations"
      },
      "key": 228,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numReconfigure",
        "label": "VM reconfigure count",
        "summary": "Number of virtual machine reconfigure operations"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmop",
        "label": "Virtual machine operations",
        "summary": "Virtual machine operations"
      },
      "key": 229,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numClone",
        "label": "VM clone count",
        "summary": "Number of virtual machine clone operations"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmop",
        "label": "Virtual machine operations",
        "summary": "Virtual machine operations"
      },
      "key": 230,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numDeploy",
        "label": "VM template deploy count",
        "summary": "Number of virtual machine template deploy operations"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmop",
        "label": "Virtual machine operations",
        "summary": "Virtual machine operations"
      },
      "key": 231,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numChangeHost",
        "label": "VM host change count (non-powered-on VMs)",
        "summary": "Number of host change operations for powered-off and suspended VMs"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmop",
        "label": "Virtual machine operations",
        "summary": "Virtual machine operations"
      },
      "key": 232,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numChangeDS",
        "label": "VM datastore change count (non-powered-on VMs)",
        "summary": "Number of datastore change operations for powered-off and suspended virtual machines"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmop",
        "label": "Virtual machine operations",
        "summary": "Virtual machine operations"
      },
      "key": 233,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numChangeHostDS",
        "label": "VM host and datastore change count (non-powered-on VMs)",
        "summary": "Number of host and datastore change operations for powered-off and suspended virtual machines"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmop",
        "label": "Virtual machine operations",
        "summary": "Virtual machine operations"
      },
      "key": 234,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numVMotion",
        "label": "vMotion count",
        "summary": "Number of migrations with vMotion (host change operations for powered-on VMs)"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vmop",
        "label": "Virtual machine operations",
        "summary": "Virtual machine operations"
      },
      "key": 235,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numSVMotion",
        "label": "Storage vMotion count",
        "summary": "Number of migrations with Storage vMotion (datastore change operations for powered-on VMs)"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "clusterServices",
        "label": "Cluster services",
        "summary": "Cluster services"
      },
      "key": 236,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "effectivecpu",
        "label": "Effective CPU resources",
        "summary": "Total available CPU resources of all hosts within a cluster"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaHertz",
        "label": "MHz",
        "summary": "Megahertz"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "clusterServices",
        "label": "Cluster services",
        "summary": "Cluster services"
      },
      "key": 237,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "effectivemem",
        "label": "Effective memory resources",
        "summary": "Total amount of machine memory of all hosts in the cluster that is available for use for virtual machine memory and overhead memory"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaBytes",
        "label": "MB",
        "summary": "Megabytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 238,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "totalmhz",
        "label": "Total",
        "summary": "Total amount of CPU resources of all hosts in the cluster"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaHertz",
        "label": "MHz",
        "summary": "Megahertz"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 239,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "totalmb",
        "label": "Total",
        "summary": "Total amount of host physicalmemory of all hosts in the cluster that is available for virtual machine memory (physical memory for use by the guest OS) and virtual machine overhead memory"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaBytes",
        "label": "MB",
        "summary": "Megabytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "clusterServices",
        "label": "Cluster services",
        "summary": "Cluster services"
      },
      "key": 240,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "failover",
        "label": "Current failover level",
        "summary": "vSphere HA number of failures that can be tolerated"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 241,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "used",
        "label": "Space actually used",
        "summary": "Amount of space actually used by the virtual machine or the datastore"
      },
      "perDeviceLevel": 1,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 242,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "provisioned",
        "label": "Space potentially used",
        "summary": "Amount of storage set aside for use by a datastore or a virtual machine"
      },
      "perDeviceLevel": 1,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 243,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "capacity",
        "label": "Capacity",
        "summary": "Configured size of the datastore"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 244,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "unshared",
        "label": "Space not shared",
        "summary": "Amount of space associated exclusively with a virtual machine"
      },
      "perDeviceLevel": 1,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 245,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "deltaused",
        "label": "Overhead due to delta disk backings",
        "summary": "Storage overhead of a virtual machine or a datastore due to delta disk backings"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 246,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "capacity.provisioned",
        "label": "provisioned",
        "summary": "provisioned"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 247,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "capacity.usage",
        "label": "usage",
        "summary": "usage"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 248,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "capacity.contention",
        "label": "contention",
        "summary": "contention"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 249,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "activationlatencystats",
        "label": "Activation latency",
        "summary": "The latency of an activation operation in vCenter Server"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 250,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "activationlatencystats",
        "label": "Activation latency",
        "summary": "The latency of an activation operation in vCenter Server"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 251,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "activationlatencystats",
        "label": "Activation latency",
        "summary": "The latency of an activation operation in vCenter Server"
      },
      "perDeviceLevel": 1,
      "rollupType": "summation",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 252,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "activationstats",
        "label": "Activation count",
        "summary": "Activation operations in vCenter Server"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 253,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "activationstats",
        "label": "Activation count",
        "summary": "Activation operations in vCenter Server"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 254,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "activationstats",
        "label": "Activation count",
        "summary": "Activation operations in vCenter Server"
      },
      "perDeviceLevel": 1,
      "rollupType": "summation",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcResources",
        "label": "vCenter resource usage information",
        "summary": "vCenter resource usage information"
      },
      "key": 255,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "buffersz",
        "label": "buffersz",
        "summary": "buffersz"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcResources",
        "label": "vCenter resource usage information",
        "summary": "vCenter resource usage information"
      },
      "key": 256,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cachesz",
        "label": "cachesz",
        "summary": "cachesz"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcResources",
        "label": "vCenter resource usage information",
        "summary": "vCenter resource usage information"
      },
      "key": 257,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "ctxswitchesrate",
        "label": "Context switch rate",
        "summary": "Number of context switches per second on the system where vCenter Server is running"
      },
      "perDeviceLevel": 1,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcResources",
        "label": "vCenter resource usage information",
        "summary": "vCenter resource usage information"
      },
      "key": 258,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "diskreadsectorrate",
        "label": "diskreadsectorrate",
        "summary": "diskreadsectorrate"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcResources",
        "label": "vCenter resource usage information",
        "summary": "vCenter resource usage information"
      },
      "key": 259,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "diskreadsrate",
        "label": "Disk read rate",
        "summary": "Number of disk reads per second on the system where vCenter Server is running"
      },
      "perDeviceLevel": 1,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcResources",
        "label": "vCenter resource usage information",
        "summary": "vCenter resource usage information"
      },
      "key": 260,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "diskwritesectorrate",
        "label": "diskwritesectorrate",
        "summary": "diskwritesectorrate"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcResources",
        "label": "vCenter resource usage information",
        "summary": "vCenter resource usage information"
      },
      "key": 261,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "diskwritesrate",
        "label": "Disk write rate",
        "summary": "Number of disk writes per second on the system where vCenter Server is running"
      },
      "perDeviceLevel": 1,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 262,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "hostsynclatencystats",
        "label": "Host sync latency",
        "summary": "The latency of a host sync operation in vCenter Server"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 263,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "hostsynclatencystats",
        "label": "Host sync latency",
        "summary": "The latency of a host sync operation in vCenter Server"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 264,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "hostsynclatencystats",
        "label": "Host sync latency",
        "summary": "The latency of a host sync operation in vCenter Server"
      },
      "perDeviceLevel": 1,
      "rollupType": "summation",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 265,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "hostsyncstats",
        "label": "Host sync count",
        "summary": "The number of host sync operations in vCenter Server"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 266,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "hostsyncstats",
        "label": "Host sync count",
        "summary": "The number of host sync operations in vCenter Server"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 267,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "hostsyncstats",
        "label": "Host sync count",
        "summary": "The number of host sync operations in vCenter Server"
      },
      "perDeviceLevel": 1,
      "rollupType": "summation",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 268,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "inventorystats",
        "label": "Inventory statistics",
        "summary": "vCenter Server inventory statistics"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 269,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "inventorystats",
        "label": "Inventory statistics",
        "summary": "vCenter Server inventory statistics"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 270,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "inventorystats",
        "label": "Inventory statistics",
        "summary": "vCenter Server inventory statistics"
      },
      "perDeviceLevel": 1,
      "rollupType": "summation",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 271,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "lockstats",
        "label": "Locking statistics",
        "summary": "vCenter Server locking statistics"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 272,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "lockstats",
        "label": "Locking statistics",
        "summary": "vCenter Server locking statistics"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 273,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "lockstats",
        "label": "Locking statistics",
        "summary": "vCenter Server locking statistics"
      },
      "perDeviceLevel": 1,
      "rollupType": "summation",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 274,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "lrostats",
        "label": "vCenter Server LRO statistics",
        "summary": "vCenter Server LRO statistics"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 275,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "lrostats",
        "label": "vCenter Server LRO statistics",
        "summary": "vCenter Server LRO statistics"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 276,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "lrostats",
        "label": "vCenter Server LRO statistics",
        "summary": "vCenter Server LRO statistics"
      },
      "perDeviceLevel": 1,
      "rollupType": "summation",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 277,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "miscstats",
        "label": "Miscellaneous",
        "summary": "Miscellaneous statistics"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 278,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "miscstats",
        "label": "Miscellaneous",
        "summary": "Miscellaneous statistics"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 279,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "miscstats",
        "label": "Miscellaneous",
        "summary": "Miscellaneous statistics"
      },
      "perDeviceLevel": 1,
      "rollupType": "summation",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 280,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "morefregstats",
        "label": "Managed object reference statistics",
        "summary": "Managed object reference counts in vCenter Server"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 281,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "morefregstats",
        "label": "Managed object reference statistics",
        "summary": "Managed object reference counts in vCenter Server"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 282,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "morefregstats",
        "label": "Managed object reference statistics",
        "summary": "Managed object reference counts in vCenter Server"
      },
      "perDeviceLevel": 1,
      "rollupType": "summation",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcResources",
        "label": "vCenter resource usage information",
        "summary": "vCenter resource usage information"
      },
      "key": 283,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "packetrecvrate",
        "label": "Received packet rate",
        "summary": "Rate of the number of total packets received per second on the system where vCenter Server is running"
      },
      "perDeviceLevel": 1,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcResources",
        "label": "vCenter resource usage information",
        "summary": "vCenter resource usage information"
      },
      "key": 284,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "packetsentrate",
        "label": "Sent packet rate",
        "summary": "Number of total packets sent per second on the system where vCenter Server is running"
      },
      "perDeviceLevel": 1,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcResources",
        "label": "vCenter resource usage information",
        "summary": "vCenter resource usage information"
      },
      "key": 285,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "systemcpuusage",
        "label": "CPU system",
        "summary": "Total system CPU used on the system where vCenter Server in running"
      },
      "perDeviceLevel": 1,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcResources",
        "label": "vCenter resource usage information",
        "summary": "vCenter resource usage information"
      },
      "key": 286,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "pagefaultrate",
        "label": "Page fault rate",
        "summary": "Number of page faults per second on the system where vCenter Server is running"
      },
      "perDeviceLevel": 1,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcResources",
        "label": "vCenter resource usage information",
        "summary": "vCenter resource usage information"
      },
      "key": 287,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "physicalmemusage",
        "label": "Physical memory",
        "summary": "Physical memory used by vCenter"
      },
      "perDeviceLevel": 1,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcResources",
        "label": "vCenter resource usage information",
        "summary": "vCenter resource usage information"
      },
      "key": 288,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "priviledgedcpuusage",
        "label": "CPU privileged",
        "summary": "CPU used by vCenter Server in privileged mode"
      },
      "perDeviceLevel": 1,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 289,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "scoreboard",
        "label": "Scoreboard statistics",
        "summary": "Object counts in vCenter Server"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 290,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "scoreboard",
        "label": "Scoreboard statistics",
        "summary": "Object counts in vCenter Server"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 291,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "scoreboard",
        "label": "Scoreboard statistics",
        "summary": "Object counts in vCenter Server"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 292,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sessionstats",
        "label": "Session statistics",
        "summary": "The statistics of client sessions connected to vCenter Server"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 293,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sessionstats",
        "label": "Session statistics",
        "summary": "The statistics of client sessions connected to vCenter Server"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 294,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sessionstats",
        "label": "Session statistics",
        "summary": "The statistics of client sessions connected to vCenter Server"
      },
      "perDeviceLevel": 1,
      "rollupType": "summation",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcResources",
        "label": "vCenter resource usage information",
        "summary": "vCenter resource usage information"
      },
      "key": 295,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "syscallsrate",
        "label": "System call rate",
        "summary": "Number of systems calls made per second on the system where vCenter Server is running"
      },
      "perDeviceLevel": 1,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 296,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "systemstats",
        "label": "System statistics",
        "summary": "The statistics of vCenter Server as a running system such as thread statistics and heap statistics"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 297,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "systemstats",
        "label": "System statistics",
        "summary": "The statistics of vCenter Server as a running system such as thread statistics and heap statistics"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 298,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "systemstats",
        "label": "System statistics",
        "summary": "The statistics of vCenter Server as a running system such as thread statistics and heap statistics"
      },
      "perDeviceLevel": 1,
      "rollupType": "summation",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcResources",
        "label": "vCenter resource usage information",
        "summary": "vCenter resource usage information"
      },
      "key": 299,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "usercpuusage",
        "label": "CPU user",
        "summary": "CPU used by vCenter Server in user mode"
      },
      "perDeviceLevel": 1,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 300,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcservicestats",
        "label": "vCenter Server service statistics",
        "summary": "vCenter service statistics such as events, alarms, and tasks"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 301,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcservicestats",
        "label": "vCenter Server service statistics",
        "summary": "vCenter service statistics such as events, alarms, and tasks"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcDebugInfo",
        "label": "vCenter debugging information",
        "summary": "vCenter debugging information"
      },
      "key": 302,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcservicestats",
        "label": "vCenter Server service statistics",
        "summary": "vCenter service statistics such as events, alarms, and tasks"
      },
      "perDeviceLevel": 1,
      "rollupType": "summation",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "vcResources",
        "label": "vCenter resource usage information",
        "summary": "vCenter resource usage information"
      },
      "key": 303,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "virtualmemusage",
        "label": "Virtual memory",
        "summary": "Virtual memory used by vCenter Server"
      },
      "perDeviceLevel": 1,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "virtualDisk",
        "label": "Virtual disk",
        "summary": "Virtual disk"
      },
      "key": 304,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "readOIO",
        "label": "Average number of outstanding read requests",
        "summary": "Average number of outstanding read requests to the virtual disk during the collection interval"
      },
      "perDeviceLevel": 2,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "virtualDisk",
        "label": "Virtual disk",
        "summary": "Virtual disk"
      },
      "key": 305,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "writeOIO",
        "label": "Average number of outstanding write requests",
        "summary": "Average number of outstanding write requests to the virtual disk during the collection interval"
      },
      "perDeviceLevel": 2,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "virtualDisk",
        "label": "Virtual disk",
        "summary": "Virtual disk"
      },
      "key": 306,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "readLoadMetric",
        "label": "Read workload metric",
        "summary": "Storage DRS virtual disk metric for the read workload model"
      },
      "perDeviceLevel": 2,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "virtualDisk",
        "label": "Virtual disk",
        "summary": "Virtual disk"
      },
      "key": 307,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "writeLoadMetric",
        "label": "Write workload metric",
        "summary": "Storage DRS virtual disk metric for the write workload model"
      },
      "perDeviceLevel": 2,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 308,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastoreReadBytes",
        "label": "Storage DRS datastore bytes read",
        "summary": "Storage DRS datastore bytes read"
      },
      "perDeviceLevel": 2,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 309,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastoreWriteBytes",
        "label": "Storage DRS datastore bytes written",
        "summary": "Storage DRS datastore bytes written"
      },
      "perDeviceLevel": 2,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 310,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastoreReadIops",
        "label": "Storage DRS datastore read I/O rate",
        "summary": "Storage DRS datastore read I/O rate"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 311,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastoreWriteIops",
        "label": "Storage DRS datastore write I/O rate",
        "summary": "Storage DRS datastore write I/O rate"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 312,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastoreReadOIO",
        "label": "Storage DRS datastore outstanding read requests",
        "summary": "Storage DRS datastore outstanding read requests"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 313,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastoreWriteOIO",
        "label": "Storage DRS datastore outstanding write requests",
        "summary": "Storage DRS datastore outstanding write requests"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 314,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastoreNormalReadLatency",
        "label": "Storage DRS datastore normalized read latency",
        "summary": "Storage DRS datastore normalized read latency"
      },
      "perDeviceLevel": 2,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 315,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastoreNormalWriteLatency",
        "label": "Storage DRS datastore normalized write latency",
        "summary": "Storage DRS datastore normalized write latency"
      },
      "perDeviceLevel": 2,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 316,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastoreReadLoadMetric",
        "label": "Storage DRS datastore read workload metric",
        "summary": "Storage DRS datastore metric for read workload model"
      },
      "perDeviceLevel": 4,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 317,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastoreWriteLoadMetric",
        "label": "Storage DRS datastore write workload metric",
        "summary": "Storage DRS datastore metric for write workload model"
      },
      "perDeviceLevel": 4,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 318,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastoreVMObservedLatency",
        "label": "Datastore latency observed by VMs",
        "summary": "The average datastore latency as seen by virtual machines"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 319,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapwait",
        "label": "Swap wait",
        "summary": "CPU time spent waiting for swap-in"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 320,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "utilization",
        "label": "Utilization",
        "summary": "CPU utilization as a percentage during the interval (CPU usage and CPU utilization might be different due to power management technologies or hyper-threading)"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 321,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "utilization",
        "label": "Utilization",
        "summary": "CPU utilization as a percentage during the interval (CPU usage and CPU utilization might be different due to power management technologies or hyper-threading)"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 322,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "utilization",
        "label": "Utilization",
        "summary": "CPU utilization as a percentage during the interval (CPU usage and CPU utilization might be different due to power management technologies or hyper-threading)"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 323,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "utilization",
        "label": "Utilization",
        "summary": "CPU utilization as a percentage during the interval (CPU usage and CPU utilization might be different due to power management technologies or hyper-threading)"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 324,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "coreUtilization",
        "label": "Core Utilization",
        "summary": "CPU utilization of the corresponding core (if hyper-threading is enabled) as a percentage during the interval (A core is utilized if either or both of its logical CPUs are utilized)"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 325,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "coreUtilization",
        "label": "Core Utilization",
        "summary": "CPU utilization of the corresponding core (if hyper-threading is enabled) as a percentage during the interval (A core is utilized if either or both of its logical CPUs are utilized)"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 326,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "coreUtilization",
        "label": "Core Utilization",
        "summary": "CPU utilization of the corresponding core (if hyper-threading is enabled) as a percentage during the interval (A core is utilized if either or both of its logical CPUs are utilized)"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 327,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "coreUtilization",
        "label": "Core Utilization",
        "summary": "CPU utilization of the corresponding core (if hyper-threading is enabled) as a percentage during the interval (A core is utilized if either or both of its logical CPUs are utilized)"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 328,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "totalCapacity",
        "label": "Total capacity",
        "summary": "Total CPU capacity reserved by and available for virtual machines"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaHertz",
        "label": "MHz",
        "summary": "Megahertz"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 329,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "latency",
        "label": "Latency",
        "summary": "Percent of time the virtual machine is unable to run because it is contending for access to the physical CPU(s)"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 330,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "entitlement",
        "label": "Entitlement",
        "summary": "CPU resources devoted by the ESX scheduler"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaHertz",
        "label": "MHz",
        "summary": "Megahertz"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 331,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "demand",
        "label": "Demand",
        "summary": "The amount of CPU resources a virtual machine would use if there were no CPU contention or CPU limit"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaHertz",
        "label": "MHz",
        "summary": "Megahertz"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 332,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "costop",
        "label": "Co-stop",
        "summary": "Time the virtual machine is ready to run, but is unable to run due to co-scheduling constraints"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 333,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "maxlimited",
        "label": "Max limited",
        "summary": "Time the virtual machine is ready to run, but is not run due to maxing out its CPU limit setting"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 334,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "overlap",
        "label": "Overlap",
        "summary": "Time the virtual machine was interrupted to perform system services on behalf of itself or other virtual machines"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpu",
        "label": "CPU",
        "summary": "CPU"
      },
      "key": 335,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "run",
        "label": "Run",
        "summary": "Time the virtual machine is scheduled to run"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 336,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapin",
        "label": "Swap in",
        "summary": "Amount swapped-in to memory from disk"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 337,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapin",
        "label": "Swap in",
        "summary": "Amount swapped-in to memory from disk"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 338,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapin",
        "label": "Swap in",
        "summary": "Amount swapped-in to memory from disk"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 339,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapin",
        "label": "Swap in",
        "summary": "Amount swapped-in to memory from disk"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 340,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapout",
        "label": "Swap out",
        "summary": "Amount of memory swapped-out to disk"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 341,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapout",
        "label": "Swap out",
        "summary": "Amount of memory swapped-out to disk"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 342,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapout",
        "label": "Swap out",
        "summary": "Amount of memory swapped-out to disk"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 343,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapout",
        "label": "Swap out",
        "summary": "Amount of memory swapped-out to disk"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 344,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sysUsage",
        "label": "Used by VMkernel",
        "summary": "Amount of host physicalmemory used by VMkernel for core functionality, such as device drivers and other internal uses"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 345,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sysUsage",
        "label": "Used by VMkernel",
        "summary": "Amount of host physicalmemory used by VMkernel for core functionality, such as device drivers and other internal uses"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 346,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sysUsage",
        "label": "Used by VMkernel",
        "summary": "Amount of host physicalmemory used by VMkernel for core functionality, such as device drivers and other internal uses"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 347,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sysUsage",
        "label": "Used by VMkernel",
        "summary": "Amount of host physicalmemory used by VMkernel for core functionality, such as device drivers and other internal uses"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 348,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "activewrite",
        "label": "Active write",
        "summary": "Estimate for the amount of memory actively being written to by the virtual machine"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 349,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "overheadMax",
        "label": "Reserved overhead",
        "summary": "Host physical memory (KB) reserved for use as the virtualization overhead for the virtual machine"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 350,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "totalCapacity",
        "label": "Total capacity",
        "summary": "Total amount of memory reservation used by and available for powered-on virtual machines and vSphere services on the host"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaBytes",
        "label": "MB",
        "summary": "Megabytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 351,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "zipped",
        "label": "Zipped memory",
        "summary": "Memory (KB) zipped"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 352,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "zipSaved",
        "label": "Memory saved by zipping",
        "summary": "Memory (KB) saved due to memory zipping"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 353,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "latency",
        "label": "Latency",
        "summary": "Percentage of time the virtual machine is waiting to access swapped or compressed memory"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 354,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "entitlement",
        "label": "Entitlement",
        "summary": "Amount of host physical memory the virtual machine is entitled to, as determined by the ESX scheduler"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 355,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "lowfreethreshold",
        "label": "Low free threshold",
        "summary": "Threshold of free host physical memory below which ESX/ESXi will begin reclaiming memory from virtual machines through ballooning and swapping"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 356,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "llSwapUsed",
        "label": "Host cache used for swapping",
        "summary": "Space used for caching swapped pages in the host cache"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 357,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "llSwapInRate",
        "label": "Swap in rate from host cache",
        "summary": "Rate at which memory is being swapped from host cache into active memory"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 358,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "llSwapOutRate",
        "label": "Swap out rate to host cache",
        "summary": "Rate at which memory is being swapped from active memory to host cache"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 359,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "overheadTouched",
        "label": "Overhead touched",
        "summary": "Actively touched overhead host physical memory (KB) reserved for use as the virtualization overhead for the virtual machine"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 360,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "llSwapUsed",
        "label": "Host cache used for swapping",
        "summary": "Space used for caching swapped pages in the host cache"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 361,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "llSwapUsed",
        "label": "Host cache used for swapping",
        "summary": "Space used for caching swapped pages in the host cache"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 362,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "llSwapUsed",
        "label": "Host cache used for swapping",
        "summary": "Space used for caching swapped pages in the host cache"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 363,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "llSwapIn",
        "label": "Swap in from host cache",
        "summary": "Amount of memory swapped-in from host cache"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 364,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "llSwapIn",
        "label": "Swap in from host cache",
        "summary": "Amount of memory swapped-in from host cache"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 365,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "llSwapIn",
        "label": "Swap in from host cache",
        "summary": "Amount of memory swapped-in from host cache"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 366,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "llSwapIn",
        "label": "Swap in from host cache",
        "summary": "Amount of memory swapped-in from host cache"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 367,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "llSwapOut",
        "label": "Swap out to host cache",
        "summary": "Amount of memory swapped-out to host cache"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 368,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "llSwapOut",
        "label": "Swap out to host cache",
        "summary": "Amount of memory swapped-out to host cache"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 369,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "llSwapOut",
        "label": "Swap out to host cache",
        "summary": "Amount of memory swapped-out to host cache"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mem",
        "label": "Memory",
        "summary": "Memory"
      },
      "key": 370,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "llSwapOut",
        "label": "Swap out to host cache",
        "summary": "Amount of memory swapped-out to host cache"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 371,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "commands",
        "label": "Commands issued",
        "summary": "Number of SCSI commands issued during the collection interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 372,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "deviceReadLatency",
        "label": "Physical device read latency",
        "summary": "Average amount of time, in milliseconds, to read from the physical device"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 373,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kernelReadLatency",
        "label": "Kernel read latency",
        "summary": "Average amount of time, in milliseconds, spent by VMkernel to process each SCSI read command"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 374,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "totalReadLatency",
        "label": "Read latency",
        "summary": "Average amount of time taken during the collection interval to process a SCSI read command issued from the guest OS to the virtual machine"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 375,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "queueReadLatency",
        "label": "Queue read latency",
        "summary": "Average amount of time spent in the VMkernel queue, per SCSI read command, during the collection interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 376,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "deviceWriteLatency",
        "label": "Physical device write latency",
        "summary": "Average amount of time, in milliseconds, to write to the physical device"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 377,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kernelWriteLatency",
        "label": "Kernel write latency",
        "summary": "Average amount of time, in milliseconds, spent by VMkernel to process each SCSI write command"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 378,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "totalWriteLatency",
        "label": "Write latency",
        "summary": "Average amount of time taken during the collection interval to process a SCSI write command issued by the guest OS to the virtual machine"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 379,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "queueWriteLatency",
        "label": "Queue write latency",
        "summary": "Average amount of time spent in the VMkernel queue, per SCSI write command, during the collection interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 380,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "deviceLatency",
        "label": "Physical device command latency",
        "summary": "Average amount of time, in milliseconds, to complete a SCSI command from the physical device"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 381,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kernelLatency",
        "label": "Kernel command latency",
        "summary": "Average amount of time, in milliseconds, spent by VMkernel to process each SCSI command"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 382,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "queueLatency",
        "label": "Queue command latency",
        "summary": "Average amount of time spent in the VMkernel queue, per SCSI command, during the collection interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 383,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "maxQueueDepth",
        "label": "Maximum queue depth",
        "summary": "Maximum queue depth"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "disk",
        "label": "Disk",
        "summary": "Disk"
      },
      "key": 384,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "commandsAveraged",
        "label": "Average commands issued per second",
        "summary": "Average number of SCSI commands issued per second during the collection interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 385,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "droppedRx",
        "label": "Receive packets dropped",
        "summary": "Number of receives dropped"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 386,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "droppedTx",
        "label": "Transmit packets dropped",
        "summary": "Number of transmits dropped"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 387,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "bytesRx",
        "label": "Data receive rate",
        "summary": "Average amount of data received per second"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 388,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "bytesTx",
        "label": "Data transmit rate",
        "summary": "Average amount of data transmitted per second"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 389,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "broadcastRx",
        "label": "Broadcast receives",
        "summary": "Number of broadcast packets received during the sampling interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 390,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "broadcastTx",
        "label": "Broadcast transmits",
        "summary": "Number of broadcast packets transmitted during the sampling interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 391,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "multicastRx",
        "label": "Multicast receives",
        "summary": "Number of multicast packets received during the sampling interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 392,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "multicastTx",
        "label": "Multicast transmits",
        "summary": "Number of multicast packets transmitted during the sampling interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 393,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "errorsRx",
        "label": "Packet receive errors",
        "summary": "Number of packets with errors received during the sampling interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 394,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "errorsTx",
        "label": "Packet transmit errors",
        "summary": "Number of packets with errors transmitted during the sampling interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "net",
        "label": "Network",
        "summary": "Network"
      },
      "key": 395,
      "level": 2,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "unknownProtos",
        "label": "Unknown protocol frames",
        "summary": "Number of frames with unknown protocol received during the sampling interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "summation",
      "statsType": "delta",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 396,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "diskUsage",
        "label": "Disk usage",
        "summary": "Amount of disk space usage for each mount point"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 397,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "resourceCpuUsage",
        "label": "Resource CPU usage (None)",
        "summary": "Amount of CPU used by the Service Console and other applications during the interval"
      },
      "perDeviceLevel": 4,
      "rollupType": "none",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaHertz",
        "label": "MHz",
        "summary": "Megahertz"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 398,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "resourceCpuUsage",
        "label": "Resource CPU usage (Average)",
        "summary": "Amount of CPU used by the Service Console and other applications during the interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaHertz",
        "label": "MHz",
        "summary": "Megahertz"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 399,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "resourceCpuUsage",
        "label": "Resource CPU usage (Maximum)",
        "summary": "Amount of CPU used by the Service Console and other applications during the interval"
      },
      "perDeviceLevel": 4,
      "rollupType": "maximum",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaHertz",
        "label": "MHz",
        "summary": "Megahertz"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 400,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "resourceCpuUsage",
        "label": "Resource CPU usage (Minimum)",
        "summary": "Amount of CPU used by the Service Console and other applications during the interval"
      },
      "perDeviceLevel": 4,
      "rollupType": "minimum",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaHertz",
        "label": "MHz",
        "summary": "Megahertz"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 401,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "resourceMemTouched",
        "label": "Resource memory touched",
        "summary": "Memory touched by the system resource group"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 402,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "resourceMemMapped",
        "label": "Resource memory mapped",
        "summary": "Memory mapped by the system resource group"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 403,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "resourceMemShared",
        "label": "Resource memory share saved",
        "summary": "Memory saved due to sharing by the system resource group"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 404,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "resourceMemSwapped",
        "label": "Resource memory swapped",
        "summary": "Memory swapped out by the system resource group"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 405,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "resourceMemOverhead",
        "label": "Resource memory overhead",
        "summary": "Overhead memory consumed by the system resource group"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 406,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "resourceMemCow",
        "label": "Resource memory shared",
        "summary": "Memory shared by the system resource group"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 407,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "resourceMemZero",
        "label": "Resource memory zero",
        "summary": "Zero filled memory used by the system resource group"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 408,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "resourceCpuRun1",
        "label": "Resource CPU running (1 min. average)",
        "summary": "CPU running average over 1 minute of the system resource group"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 409,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "resourceCpuAct1",
        "label": "Resource CPU active (1 min average)",
        "summary": "CPU active average over 1 minute of the system resource group"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 410,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "resourceCpuMaxLimited1",
        "label": "Resource CPU maximum limited (1 min)",
        "summary": "CPU maximum limited over 1 minute of the system resource group"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 411,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "resourceCpuRun5",
        "label": "Resource CPU running (5 min average)",
        "summary": "CPU running average over 5 minutes of the system resource group"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 412,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "resourceCpuAct5",
        "label": "Resource CPU active (5 min average)",
        "summary": "CPU active average over 5 minutes of the system resource group"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 413,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "resourceCpuMaxLimited5",
        "label": "Resource CPU maximum limited (5 min)",
        "summary": "CPU maximum limited over 5 minutes of the system resource group"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 414,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "resourceCpuAllocMin",
        "label": "Resource CPU allocation minimum (in MHz)",
        "summary": "CPU allocation reservation (in MHz) of the system resource group"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaHertz",
        "label": "MHz",
        "summary": "Megahertz"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 415,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "resourceCpuAllocMax",
        "label": "Resource CPU allocation maximum (in MHz)",
        "summary": "CPU allocation limit (in MHz) of the system resource group"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaHertz",
        "label": "MHz",
        "summary": "Megahertz"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 416,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "resourceCpuAllocShares",
        "label": "Resource CPU allocation shares",
        "summary": "CPU allocation shares of the system resource group"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 417,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "resourceMemAllocMin",
        "label": "Resource memory allocation minimum (in KB)",
        "summary": "Memory allocation reservation (in KB) of the system resource group"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 418,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "resourceMemAllocMax",
        "label": "Resource memory allocation maximum (in KB)",
        "summary": "Memory allocation limit (in KB) of the system resource group"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 419,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "resourceMemAllocShares",
        "label": "Resource memory allocation shares",
        "summary": "Memory allocation shares of the system resource group"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 420,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "osUptime",
        "label": "OS Uptime",
        "summary": "Total time elapsed, in seconds, since last operating system boot-up"
      },
      "perDeviceLevel": 4,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "second",
        "label": "Second",
        "summary": "Second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sys",
        "label": "System",
        "summary": "System"
      },
      "key": 421,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "resourceMemConsumed",
        "label": "Resource memory consumed",
        "summary": "resourceMemConsumed"
      },
      "perDeviceLevel": 4,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "rescpu",
        "label": "Resource group CPU",
        "summary": "Resource group CPU"
      },
      "key": 422,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "actav1",
        "label": "Active (1 min average)",
        "summary": "CPU active average over 1 minute"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "rescpu",
        "label": "Resource group CPU",
        "summary": "Resource group CPU"
      },
      "key": 423,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "actpk1",
        "label": "Active (1 min peak)",
        "summary": "CPU active peak over 1 minute"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "rescpu",
        "label": "Resource group CPU",
        "summary": "Resource group CPU"
      },
      "key": 424,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "runav1",
        "label": "Running (1 min average)",
        "summary": "CPU running average over 1 minute"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "rescpu",
        "label": "Resource group CPU",
        "summary": "Resource group CPU"
      },
      "key": 425,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "actav5",
        "label": "Active (5 min average)",
        "summary": "CPU active average over 5 minutes"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "rescpu",
        "label": "Resource group CPU",
        "summary": "Resource group CPU"
      },
      "key": 426,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "actpk5",
        "label": "Active (5 min peak)",
        "summary": "CPU active peak over 5 minutes"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "rescpu",
        "label": "Resource group CPU",
        "summary": "Resource group CPU"
      },
      "key": 427,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "runav5",
        "label": "Running (5 min average)",
        "summary": "CPU running average over 5 minutes"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "rescpu",
        "label": "Resource group CPU",
        "summary": "Resource group CPU"
      },
      "key": 428,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "actav15",
        "label": "Active (15 min average)",
        "summary": "CPU active average over 15 minutes"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "rescpu",
        "label": "Resource group CPU",
        "summary": "Resource group CPU"
      },
      "key": 429,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "actpk15",
        "label": "Active (15 min peak)",
        "summary": "CPU active peak over 15 minutes"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "rescpu",
        "label": "Resource group CPU",
        "summary": "Resource group CPU"
      },
      "key": 430,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "runav15",
        "label": "Running (15 min average)",
        "summary": "CPU running average over 15 minutes"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "rescpu",
        "label": "Resource group CPU",
        "summary": "Resource group CPU"
      },
      "key": 431,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "runpk1",
        "label": "Running (1 min peak)",
        "summary": "CPU running peak over 1 minute"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "rescpu",
        "label": "Resource group CPU",
        "summary": "Resource group CPU"
      },
      "key": 432,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "maxLimited1",
        "label": "Throttled (1 min average)",
        "summary": "Amount of CPU resources over the limit that were refused, average over 1 minute"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "rescpu",
        "label": "Resource group CPU",
        "summary": "Resource group CPU"
      },
      "key": 433,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "runpk5",
        "label": "Running (5 min peak)",
        "summary": "CPU running peak over 5 minutes"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "rescpu",
        "label": "Resource group CPU",
        "summary": "Resource group CPU"
      },
      "key": 434,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "maxLimited5",
        "label": "Throttled (5 min average)",
        "summary": "Amount of CPU resources over the limit that were refused, average over 5 minutes"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "rescpu",
        "label": "Resource group CPU",
        "summary": "Resource group CPU"
      },
      "key": 435,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "runpk15",
        "label": "Running (15 min peak)",
        "summary": "CPU running peak over 15 minutes"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "rescpu",
        "label": "Resource group CPU",
        "summary": "Resource group CPU"
      },
      "key": 436,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "maxLimited15",
        "label": "Throttled (15 min average)",
        "summary": "Amount of CPU resources over the limit that were refused, average over 15 minutes"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "percent",
        "label": "Percent",
        "summary": "Percentage"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "rescpu",
        "label": "Resource group CPU",
        "summary": "Resource group CPU"
      },
      "key": 437,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "sampleCount",
        "label": "Group CPU sample count",
        "summary": "Group CPU sample count"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "rescpu",
        "label": "Resource group CPU",
        "summary": "Resource group CPU"
      },
      "key": 438,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "samplePeriod",
        "label": "Group CPU sample period",
        "summary": "Group CPU sample period"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "managementAgent",
        "label": "Management agent",
        "summary": "Management agent"
      },
      "key": 439,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "memUsed",
        "label": "Memory used",
        "summary": "Amount of total configured memory that is available for use"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "managementAgent",
        "label": "Management agent",
        "summary": "Management agent"
      },
      "key": 440,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "swapUsed",
        "label": "Memory swap used",
        "summary": "Sum of the memory swapped by all powered-on virtual machines on the host"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytes",
        "label": "KB",
        "summary": "Kilobytes"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "managementAgent",
        "label": "Management agent",
        "summary": "Management agent"
      },
      "key": 441,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "cpuUsage",
        "label": "CPU usage",
        "summary": "Amount of Service Console CPU usage"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "megaHertz",
        "label": "MHz",
        "summary": "Megahertz"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storagePath",
        "label": "Storage path",
        "summary": "Storage path"
      },
      "key": 442,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "commandsAveraged",
        "label": "Average commands issued per second",
        "summary": "Average number of commands issued per second on the storage path during the collection interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storagePath",
        "label": "Storage path",
        "summary": "Storage path"
      },
      "key": 443,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numberReadAveraged",
        "label": "Average read requests per second",
        "summary": "Average number of read commands issued per second on the storage path during the collection interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storagePath",
        "label": "Storage path",
        "summary": "Storage path"
      },
      "key": 444,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "numberWriteAveraged",
        "label": "Average write requests per second",
        "summary": "Average number of write commands issued per second on the storage path during the collection interval"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storagePath",
        "label": "Storage path",
        "summary": "Storage path"
      },
      "key": 445,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "read",
        "label": "Read rate",
        "summary": "Rate of reading data on the storage path"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storagePath",
        "label": "Storage path",
        "summary": "Storage path"
      },
      "key": 446,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "write",
        "label": "Write rate",
        "summary": "Rate of writing data on the storage path"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storagePath",
        "label": "Storage path",
        "summary": "Storage path"
      },
      "key": 447,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "totalReadLatency",
        "label": "Read latency",
        "summary": "The average time a read issued on the storage path takes"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "storagePath",
        "label": "Storage path",
        "summary": "Storage path"
      },
      "key": 448,
      "level": 3,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "totalWriteLatency",
        "label": "Write latency",
        "summary": "The average time a write issued on the storage path takes"
      },
      "perDeviceLevel": 3,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "millisecond",
        "label": "Millisecond",
        "summary": "Millisecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "virtualDisk",
        "label": "Virtual disk",
        "summary": "Virtual disk"
      },
      "key": 449,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "readIOSize",
        "label": "Read request size",
        "summary": "Average read request size in bytes"
      },
      "perDeviceLevel": 4,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "virtualDisk",
        "label": "Virtual disk",
        "summary": "Virtual disk"
      },
      "key": 450,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "writeIOSize",
        "label": "Write request size",
        "summary": "Average write request size in bytes"
      },
      "perDeviceLevel": 4,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "virtualDisk",
        "label": "Virtual disk",
        "summary": "Virtual disk"
      },
      "key": 451,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "smallSeeks",
        "label": "Number of small seeks",
        "summary": "Number of seeks during the interval that were less than 64 LBNs apart"
      },
      "perDeviceLevel": 4,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "virtualDisk",
        "label": "Virtual disk",
        "summary": "Virtual disk"
      },
      "key": 452,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "mediumSeeks",
        "label": "Number of medium seeks",
        "summary": "Number of seeks during the interval that were between 64 and 8192 LBNs apart"
      },
      "perDeviceLevel": 4,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "virtualDisk",
        "label": "Virtual disk",
        "summary": "Virtual disk"
      },
      "key": 453,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "largeSeeks",
        "label": "Number of large seeks",
        "summary": "Number of seeks during the interval that were greater than 8192 LBNs apart"
      },
      "perDeviceLevel": 4,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "virtualDisk",
        "label": "Virtual disk",
        "summary": "Virtual disk"
      },
      "key": 454,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "readLatencyUS",
        "label": "Read Latency (us)",
        "summary": "Read latency in microseconds"
      },
      "perDeviceLevel": 4,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "microsecond",
        "label": "Microsecond",
        "summary": "Microsecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "virtualDisk",
        "label": "Virtual disk",
        "summary": "Virtual disk"
      },
      "key": 455,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "writeLatencyUS",
        "label": "Write Latency (us)",
        "summary": "Write latency in microseconds"
      },
      "perDeviceLevel": 4,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "microsecond",
        "label": "Microsecond",
        "summary": "Microsecond"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastore",
        "label": "Datastore",
        "summary": "Datastore"
      },
      "key": 456,
      "level": 1,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "datastoreMaxQueueDepth",
        "label": "Storage I/O Control datastore maximum queue depth",
        "summary": "Storage I/O Control datastore maximum queue depth"
      },
      "perDeviceLevel": 3,
      "rollupType": "latest",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "hbr",
        "label": "vSphere Replication",
        "summary": "vSphere Replication"
      },
      "key": 457,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "hbrNumVms",
        "label": "vSphere Replication VM Count",
        "summary": "Current number of replicated virtual machines"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "absolute",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "number",
        "label": "Number",
        "summary": "Number"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "hbr",
        "label": "vSphere Replication",
        "summary": "vSphere Replication"
      },
      "key": 458,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "hbrNetRx",
        "label": "Replication Data Receive Rate",
        "summary": "Average amount of data received per second"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }, {
      "class": "com.vmware.vim25.PerfCounterInfo",
      "dynamicType": null,
      "groupInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "hbr",
        "label": "vSphere Replication",
        "summary": "vSphere Replication"
      },
      "key": 459,
      "level": 4,
      "nameInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "hbrNetTx",
        "label": "Replication Data Transmit Rate",
        "summary": "Average amount of data transmitted per second"
      },
      "perDeviceLevel": 4,
      "rollupType": "average",
      "statsType": "rate",
      "unitInfo": {
        "class": "com.vmware.vim25.ElementDescription",
        "dynamicType": null,
        "key": "kiloBytesPerSecond",
        "label": "KBps",
        "summary": "Kilobytes per second"
      }
    }];
    return counterData[counterId];
  };
}