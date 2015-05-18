function initPerformanceResolver(s) {
    sigma.prototype.resolverPerformanceCounterId = function (counterId) {
        counterData = [
  {
    "rollupType": "none",
    "statsType": "rate",
    "key": "usage",
    "label": "Usage",
    "summary": "CPU usage as a percentage during the interval",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "usage",
    "label": "Usage",
    "summary": "CPU usage as a percentage during the interval",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "rate",
    "key": "usage",
    "label": "Usage",
    "summary": "CPU usage as a percentage during the interval",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "rate",
    "key": "usage",
    "label": "Usage",
    "summary": "CPU usage as a percentage during the interval",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "none",
    "statsType": "rate",
    "key": "usagemhz",
    "label": "Usage in MHz",
    "summary": "CPU usage in megahertz during the interval",
    "unit": {
      "key": "megaHertz",
      "label": "MHz",
      "summary": "Megahertz"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "usagemhz",
    "label": "Usage in MHz",
    "summary": "CPU usage in megahertz during the interval",
    "unit": {
      "key": "megaHertz",
      "label": "MHz",
      "summary": "Megahertz"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "rate",
    "key": "usagemhz",
    "label": "Usage in MHz",
    "summary": "CPU usage in megahertz during the interval",
    "unit": {
      "key": "megaHertz",
      "label": "MHz",
      "summary": "Megahertz"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "rate",
    "key": "usagemhz",
    "label": "Usage in MHz",
    "summary": "CPU usage in megahertz during the interval",
    "unit": {
      "key": "megaHertz",
      "label": "MHz",
      "summary": "Megahertz"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "reservedCapacity",
    "label": "Reserved capacity",
    "summary": "Total CPU capacity reserved by virtual machines",
    "unit": {
      "key": "megaHertz",
      "label": "MHz",
      "summary": "Megahertz"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "system",
    "label": "System",
    "summary": "Amount of time spent on system processes on each virtual CPU in the virtual machine",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "wait",
    "label": "Wait",
    "summary": "Total CPU time spent in wait state",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "ready",
    "label": "Ready",
    "summary": "Percentage of time that the virtual machine was ready, but could not get scheduled to run on the physical CPU",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "idle",
    "label": "Idle",
    "summary": "Total time that the CPU spent in an idle state",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "used",
    "label": "Used",
    "summary": "Total CPU usage",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "capacity.provisioned",
    "label": "CPU Capacity Provisioned",
    "summary": "Capacity in MHz of the physical CPU cores",
    "unit": {
      "key": "megaHertz",
      "label": "MHz",
      "summary": "Megahertz"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "capacity.entitlement",
    "label": "CPU Capacity Entitlement",
    "summary": "CPU resources devoted by the ESX scheduler to virtual machines and resource pools",
    "unit": {
      "key": "megaHertz",
      "label": "MHz",
      "summary": "Megahertz"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "capacity.usage",
    "label": "CPU Capacity Usage",
    "summary": "CPU usage in MHz during the interval",
    "unit": {
      "key": "megaHertz",
      "label": "MHz",
      "summary": "Megahertz"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "capacity.demand",
    "label": "CPU Capacity Demand",
    "summary": "The amount of CPU resources the virtual machines on this host would use if there were no CPU contention or CPU limit",
    "unit": {
      "key": "megaHertz",
      "label": "MHz",
      "summary": "Megahertz"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "capacity.contention",
    "label": "CPU Capacity Contention",
    "summary": "Percent of time the virtual machines on this host are unable to run because they are contending for access to the physical CPU(s)",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "corecount.provisioned",
    "label": "CPU Core Count Provisioned",
    "summary": "The number of physical cores provisioned to the entity",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "corecount.usage",
    "label": "CPU Core Count Usage",
    "summary": "The number of virtual processors running on the host",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "corecount.contention",
    "label": "CPU Core Count Contention",
    "summary": "Time the virtual machine is ready to run, but is unable to run due to co-scheduling constraints",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "usage",
    "label": "Usage",
    "summary": "Memory usage as percentage of total configured or available memory",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "usage",
    "label": "Usage",
    "summary": "Memory usage as percentage of total configured or available memory",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "usage",
    "label": "Usage",
    "summary": "Memory usage as percentage of total configured or available memory",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "usage",
    "label": "Usage",
    "summary": "Memory usage as percentage of total configured or available memory",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "reservedCapacity",
    "label": "Reserved capacity",
    "summary": "Total amount of memory reservation used by powered-on virtual machines and vSphere services on the host",
    "unit": {
      "key": "megaBytes",
      "label": "MB",
      "summary": "Megabytes"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "granted",
    "label": "Granted",
    "summary": "Amount of host physical memory or physical memory that is mapped for a virtual machine or a host",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "granted",
    "label": "Granted",
    "summary": "Amount of host physical memory or physical memory that is mapped for a virtual machine or a host",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "granted",
    "label": "Granted",
    "summary": "Amount of host physical memory or physical memory that is mapped for a virtual machine or a host",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "granted",
    "label": "Granted",
    "summary": "Amount of host physical memory or physical memory that is mapped for a virtual machine or a host",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "active",
    "label": "Active",
    "summary": "Amount of memory that is actively used, as estimated by VMkernel based on recently touched memory pages",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "active",
    "label": "Active",
    "summary": "Amount of memory that is actively used, as estimated by VMkernel based on recently touched memory pages",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "active",
    "label": "Active",
    "summary": "Amount of memory that is actively used, as estimated by VMkernel based on recently touched memory pages",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "active",
    "label": "Active",
    "summary": "Amount of memory that is actively used, as estimated by VMkernel based on recently touched memory pages",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "shared",
    "label": "Shared",
    "summary": "Amount of guest physical memory that is shared with other virtual machines, relative to a single virtual machine or to all powered-on virtual machines on a host",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "shared",
    "label": "Shared",
    "summary": "Amount of guest physical memory that is shared with other virtual machines, relative to a single virtual machine or to all powered-on virtual machines on a host",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "shared",
    "label": "Shared",
    "summary": "Amount of guest physical memory that is shared with other virtual machines, relative to a single virtual machine or to all powered-on virtual machines on a host",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "shared",
    "label": "Shared",
    "summary": "Amount of guest physical memory that is shared with other virtual machines, relative to a single virtual machine or to all powered-on virtual machines on a host",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "zero",
    "label": "Zero",
    "summary": "Memory that contains 0s only",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "zero",
    "label": "Zero",
    "summary": "Memory that contains 0s only",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "zero",
    "label": "Zero",
    "summary": "Memory that contains 0s only",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "zero",
    "label": "Zero",
    "summary": "Memory that contains 0s only",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "unreserved",
    "label": "Unreserved",
    "summary": "Amount of memory that is unreserved",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "unreserved",
    "label": "Unreserved",
    "summary": "Amount of memory that is unreserved",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "unreserved",
    "label": "Unreserved",
    "summary": "Amount of memory that is unreserved",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "unreserved",
    "label": "Unreserved",
    "summary": "Amount of memory that is unreserved",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "swapused",
    "label": "Swap used",
    "summary": "Amount of memory that is used by swap",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "swapused",
    "label": "Swap used",
    "summary": "Amount of memory that is used by swap",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "swapused",
    "label": "Swap used",
    "summary": "Amount of memory that is used by swap",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "swapused",
    "label": "Swap used",
    "summary": "Amount of memory that is used by swap",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "swapunreserved",
    "label": "Swap unreserved",
    "summary": "Amount of memory that is unreserved by swap",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "swapunreserved",
    "label": "Swap unreserved",
    "summary": "Amount of memory that is unreserved by swap",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "swapunreserved",
    "label": "Swap unreserved",
    "summary": "Amount of memory that is unreserved by swap",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "swapunreserved",
    "label": "Swap unreserved",
    "summary": "Amount of memory that is unreserved by swap",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "sharedcommon",
    "label": "Shared common",
    "summary": "Amount of machine memory that is shared by all powered-on virtual machines and vSphere services on the host",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "sharedcommon",
    "label": "Shared common",
    "summary": "Amount of machine memory that is shared by all powered-on virtual machines and vSphere services on the host",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "sharedcommon",
    "label": "Shared common",
    "summary": "Amount of machine memory that is shared by all powered-on virtual machines and vSphere services on the host",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "sharedcommon",
    "label": "Shared common",
    "summary": "Amount of machine memory that is shared by all powered-on virtual machines and vSphere services on the host",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "heap",
    "label": "Heap",
    "summary": "VMkernel virtual address space dedicated to VMkernel main heap and related data",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "heap",
    "label": "Heap",
    "summary": "VMkernel virtual address space dedicated to VMkernel main heap and related data",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "heap",
    "label": "Heap",
    "summary": "VMkernel virtual address space dedicated to VMkernel main heap and related data",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "heap",
    "label": "Heap",
    "summary": "VMkernel virtual address space dedicated to VMkernel main heap and related data",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "heapfree",
    "label": "Heap free",
    "summary": "Free address space in the VMkernel main heap",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "heapfree",
    "label": "Heap free",
    "summary": "Free address space in the VMkernel main heap",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "heapfree",
    "label": "Heap free",
    "summary": "Free address space in the VMkernel main heap",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "heapfree",
    "label": "Heap free",
    "summary": "Free address space in the VMkernel main heap",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "state",
    "label": "State",
    "summary": "One of four threshold levels representing the percentage of free memory on the host. The counter value determines swapping and ballooning behavior for memory reclamation.",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "swapped",
    "label": "Swapped",
    "summary": "Current amount of guest physical memory swapped out to the virtual machine swap file by the VMkernel",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "swapped",
    "label": "Swapped",
    "summary": "Current amount of guest physical memory swapped out to the virtual machine swap file by the VMkernel",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "swapped",
    "label": "Swapped",
    "summary": "Current amount of guest physical memory swapped out to the virtual machine swap file by the VMkernel",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "swapped",
    "label": "Swapped",
    "summary": "Current amount of guest physical memory swapped out to the virtual machine swap file by the VMkernel",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "swaptarget",
    "label": "Swap target",
    "summary": "Target size for the virtual machine swap file",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "swaptarget",
    "label": "Swap target",
    "summary": "Target size for the virtual machine swap file",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "swaptarget",
    "label": "Swap target",
    "summary": "Target size for the virtual machine swap file",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "swaptarget",
    "label": "Swap target",
    "summary": "Target size for the virtual machine swap file",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "swapIn",
    "label": "swapIn",
    "summary": "swapIn",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "swapIn",
    "label": "swapIn",
    "summary": "swapIn",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "swapIn",
    "label": "swapIn",
    "summary": "swapIn",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "swapIn",
    "label": "swapIn",
    "summary": "swapIn",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "swapOut",
    "label": "swapOut",
    "summary": "swapOut",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "swapOut",
    "label": "swapOut",
    "summary": "swapOut",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "swapOut",
    "label": "swapOut",
    "summary": "swapOut",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "swapOut",
    "label": "swapOut",
    "summary": "swapOut",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "swapinRate",
    "label": "Swap in rate",
    "summary": "Rate at which memory is swapped from disk into active memory during the interval",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "swapoutRate",
    "label": "Swap out rate",
    "summary": "Rate at which memory is being swapped from active memory to disk during the current interval",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "swapOut",
    "label": "Memory swap out",
    "summary": "Amount of memory that is swapped out for the Service Console",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "swapIn",
    "label": "Memory swap in",
    "summary": "Amount of memory that is swapped in for the Service Console",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "vmmemctl",
    "label": "Balloon",
    "summary": "Amount of memory allocated by the virtual machine memory control driver (vmmemctl), which is installed with VMware Tools",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "vmmemctl",
    "label": "Balloon",
    "summary": "Amount of memory allocated by the virtual machine memory control driver (vmmemctl), which is installed with VMware Tools",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "vmmemctl",
    "label": "Balloon",
    "summary": "Amount of memory allocated by the virtual machine memory control driver (vmmemctl), which is installed with VMware Tools",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "vmmemctl",
    "label": "Balloon",
    "summary": "Amount of memory allocated by the virtual machine memory control driver (vmmemctl), which is installed with VMware Tools",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "vmmemctltarget",
    "label": "Balloon target",
    "summary": "Target value set by VMkernal for the virtual machine&apos;s memory balloon size",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "vmmemctltarget",
    "label": "Balloon target",
    "summary": "Target value set by VMkernal for the virtual machine&apos;s memory balloon size",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "vmmemctltarget",
    "label": "Balloon target",
    "summary": "Target value set by VMkernal for the virtual machine&apos;s memory balloon size",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "vmmemctltarget",
    "label": "Balloon target",
    "summary": "Target value set by VMkernal for the virtual machine&apos;s memory balloon size",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "consumed",
    "label": "Consumed",
    "summary": "Amount of host physical memory consumed by a virtual machine, host, or cluster",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "consumed",
    "label": "Consumed",
    "summary": "Amount of host physical memory consumed by a virtual machine, host, or cluster",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "consumed",
    "label": "Consumed",
    "summary": "Amount of host physical memory consumed by a virtual machine, host, or cluster",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "consumed",
    "label": "Consumed",
    "summary": "Amount of host physical memory consumed by a virtual machine, host, or cluster",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "overhead",
    "label": "Overhead",
    "summary": "Host physical memory (KB) consumed by the virtualization infrastructure for running the virtual machine",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "overhead",
    "label": "Overhead",
    "summary": "Host physical memory (KB) consumed by the virtualization infrastructure for running the virtual machine",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "overhead",
    "label": "Overhead",
    "summary": "Host physical memory (KB) consumed by the virtualization infrastructure for running the virtual machine",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "overhead",
    "label": "Overhead",
    "summary": "Host physical memory (KB) consumed by the virtualization infrastructure for running the virtual machine",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "compressed",
    "label": "Compressed",
    "summary": "Amount of guest physical memory compressed by ESX/ESXi",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "compressionRate",
    "label": "Compression rate",
    "summary": "Rate of memory compression for the virtual machine",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "decompressionRate",
    "label": "Decompression rate",
    "summary": "Rate of memory decompression for the virtual machine",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "capacity.provisioned",
    "label": "Memory Capacity Provisioned",
    "summary": "Total amount of guest physical memory configured for the virtual machine",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "capacity.entitlement",
    "label": "Memory Capacity Entitlement",
    "summary": "Amount of host physical memory the virtual machine is entitled to, as determined by the ESX scheduler",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "capacity.usable",
    "label": "Memory Capacity Usable",
    "summary": "Amount of host physical memory available for use by virtual machines on this host",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "capacity.usage",
    "label": "Memory Capacity Usage",
    "summary": "Amount of host physical memory actively used",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "capacity.contention",
    "label": "Memory Capacity Contention",
    "summary": "Percentage of time the virtual machine is waiting to access swapped, compressed or ballooned memory",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "capacity.usage.vm",
    "label": "vm",
    "summary": "vm",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "capacity.usage.vmOvrhd",
    "label": "vmOvrhd",
    "summary": "vmOvrhd",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "capacity.usage.vmkOvrhd",
    "label": "vmkOvrhd",
    "summary": "vmkOvrhd",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "capacity.usage.userworld",
    "label": "userworld",
    "summary": "userworld",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "reservedCapacity.vm",
    "label": "vm",
    "summary": "vm",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "reservedCapacity.vmOvhd",
    "label": "vmOvhd",
    "summary": "vmOvhd",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "reservedCapacity.vmkOvrhd",
    "label": "vmkOvrhd",
    "summary": "vmkOvrhd",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "reservedCapacity.userworld",
    "label": "userworld",
    "summary": "userworld",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "reservedCapacityPct",
    "label": "Memory Reserved Capacity %",
    "summary": "Percent of memory that has been reserved either through VMkernel use, by userworlds, or due to virtual machine memory reservations",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "consumed.vms",
    "label": "Memory Consumed by VMs",
    "summary": "Amount of host physical memory consumed by virtual machines on this host",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "consumed.userworlds",
    "label": "Memory Consumed by userworlds",
    "summary": "Amount of host physical memory consumed by userworlds on this host",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "none",
    "statsType": "rate",
    "key": "usage",
    "label": "Usage",
    "summary": "Aggregated disk I/O rate. For hosts, this metric includes the rates for all virtual machines running on the host during the collection interval.",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "usage",
    "label": "Usage",
    "summary": "Aggregated disk I/O rate. For hosts, this metric includes the rates for all virtual machines running on the host during the collection interval.",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "rate",
    "key": "usage",
    "label": "Usage",
    "summary": "Aggregated disk I/O rate. For hosts, this metric includes the rates for all virtual machines running on the host during the collection interval.",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "rate",
    "key": "usage",
    "label": "Usage",
    "summary": "Aggregated disk I/O rate. For hosts, this metric includes the rates for all virtual machines running on the host during the collection interval.",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "numberRead",
    "label": "Read requests",
    "summary": "Number of disk reads during the collection interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "numberWrite",
    "label": "Write requests",
    "summary": "Number of disk writes during the collection interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "read",
    "label": "Read rate",
    "summary": "Average number of kilobytes read from the disk each second during the collection interval",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "write",
    "label": "Write rate",
    "summary": "Average number of kilobytes written to disk each second during the collection interval",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "totalLatency",
    "label": "Command latency",
    "summary": "Average amount of time taken during the collection interval to process a SCSI command issued by the guest OS to the virtual machine",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "maxTotalLatency",
    "label": "Highest latency",
    "summary": "Highest latency value across all disks used by the host",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "commandsAborted",
    "label": "Commands aborted",
    "summary": "Number of SCSI commands aborted during the collection interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "busResets",
    "label": "Bus resets",
    "summary": "Number of SCSI-bus reset commands issued during the collection interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "numberReadAveraged",
    "label": "Average read requests per second",
    "summary": "Average number of disk reads per second during the collection interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "numberWriteAveraged",
    "label": "Average write requests per second",
    "summary": "Average number of disk writes per second during the collection interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "throughput.usage",
    "label": "Disk Throughput Usage",
    "summary": "Aggregated disk I/O rate",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "throughput.contention",
    "label": "Disk Throughput Contention",
    "summary": "Average amount of time for an I/O operation to complete",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "scsiReservationConflicts",
    "label": "Disk SCSI Reservation Conflicts",
    "summary": "Number of SCSI reservation conflicts for the LUN during the collection interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "scsiReservationCnflctsPct",
    "label": "Disk SCSI Reservation Conflicts %",
    "summary": "Number of SCSI reservation conflicts for the LUN as a percent of total commands during the collection interval",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "none",
    "statsType": "rate",
    "key": "usage",
    "label": "Usage",
    "summary": "Network utilization (combined transmit-rates and receive-rates) during the interval",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "usage",
    "label": "Usage",
    "summary": "Network utilization (combined transmit-rates and receive-rates) during the interval",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "rate",
    "key": "usage",
    "label": "Usage",
    "summary": "Network utilization (combined transmit-rates and receive-rates) during the interval",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "rate",
    "key": "usage",
    "label": "Usage",
    "summary": "Network utilization (combined transmit-rates and receive-rates) during the interval",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "packetsRx",
    "label": "Packets received",
    "summary": "Number of packets received during the interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "packetsTx",
    "label": "Packets transmitted",
    "summary": "Number of packets transmitted during the interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "received",
    "label": "Data receive rate",
    "summary": "Average rate at which data was received during the interval",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "transmitted",
    "label": "Data transmit rate",
    "summary": "Average rate at which data was transmitted during the interval",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "throughput.provisioned",
    "label": "pNic Throughput Provisioned",
    "summary": "Provisioned pNic I/O Throughput",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "throughput.usable",
    "label": "pNic Throughput Usable",
    "summary": "Usable pNic I/O Throughput",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "throughput.usage",
    "label": "vNic Throughput Usage",
    "summary": "Average vNic I/O rate",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "throughput.contention",
    "label": "vNic Throughput Contention",
    "summary": "Count of vNic packet drops",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "throughput.packetsPerSec",
    "label": "pNic Packets Received and Transmitted per Second",
    "summary": "Average rate of packets received and transmitted per second",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "uptime",
    "label": "Uptime",
    "summary": "Total time elapsed, in seconds, since last system startup",
    "unit": {
      "key": "second",
      "label": "Second",
      "summary": "Second"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "heartbeat",
    "label": "Heartbeat",
    "summary": "Number of heartbeats issued per virtual machine during the interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "power",
    "label": "Usage",
    "summary": "Current power usage",
    "unit": {
      "key": "watt",
      "label": "Watt",
      "summary": "Watt"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "powerCap",
    "label": "Cap",
    "summary": "Maximum allowed power usage",
    "unit": {
      "key": "watt",
      "label": "Watt",
      "summary": "Watt"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "energy",
    "label": "Energy usage",
    "summary": "Total energy used since last stats reset",
    "unit": {
      "key": "joule",
      "label": "Joule",
      "summary": "Joule"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "capacity.usagePct",
    "label": "Host Power Capacity Provisioned",
    "summary": "Current power usage as a percentage of maximum allowed power",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "commandsAveraged",
    "label": "Average commands issued per second",
    "summary": "Average number of commands issued per second by the storage adapter during the collection interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "numberReadAveraged",
    "label": "Average read requests per second",
    "summary": "Average number of read commands issued per second by the storage adapter during the collection interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "numberWriteAveraged",
    "label": "Average write requests per second",
    "summary": "Average number of write commands issued per second by the storage adapter during the collection interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "read",
    "label": "Read rate",
    "summary": "Rate of reading data by the storage adapter",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "write",
    "label": "Write rate",
    "summary": "Rate of writing data by the storage adapter",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "totalReadLatency",
    "label": "Read latency",
    "summary": "The average time a read by the storage adapter takes",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "totalWriteLatency",
    "label": "Write latency",
    "summary": "The average time a write by the storage adapter takes",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "maxTotalLatency",
    "label": "Highest latency",
    "summary": "Highest latency value across all storage adapters used by the host",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "throughput.cont",
    "label": "Storage Adapter Throughput Contention",
    "summary": "Average amount of time for an I/O operation to complete",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "OIOsPct",
    "label": "Storage Adapter Outstanding I/Os",
    "summary": "The percent of I/Os that have been issued but have not yet completed",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "numberReadAveraged",
    "label": "Average read requests per second",
    "summary": "Average number of read commands issued per second to the virtual disk during the collection interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "numberWriteAveraged",
    "label": "Average write requests per second",
    "summary": "Average number of write commands issued per second to the virtual disk during the collection interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "read",
    "label": "Read rate",
    "summary": "Rate of reading data from the virtual disk",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "write",
    "label": "Write rate",
    "summary": "Rate of writing data to the virtual disk",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "totalReadLatency",
    "label": "Read latency",
    "summary": "The average time a read from the virtual disk takes",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "totalWriteLatency",
    "label": "Write latency",
    "summary": "The average time a write to the virtual disk takes",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "throughput.cont",
    "label": "Virtual Disk Throughput Contention",
    "summary": "Average amount of time for an I/O operation to complete",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "numberReadAveraged",
    "label": "Average read requests per second",
    "summary": "Average number of read commands issued per second to the datastore during the collection interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "numberWriteAveraged",
    "label": "Average write requests per second",
    "summary": "Average number of write commands issued per second to the datastore during the collection interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "read",
    "label": "Read rate",
    "summary": "Rate of reading data from the datastore",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "write",
    "label": "Write rate",
    "summary": "Rate of writing data to the datastore",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "totalReadLatency",
    "label": "Read latency",
    "summary": "The average time a read from the datastore takes",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "totalWriteLatency",
    "label": "Write latency",
    "summary": "The average time a write to the datastore takes",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "maxTotalLatency",
    "label": "Highest latency",
    "summary": "Highest latency value across all datastores used by the host",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "datastoreIops",
    "label": "Storage I/O Control aggregated IOPS",
    "summary": "Storage I/O Control aggregated IOPS",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "sizeNormalizedDatastoreLatency",
    "label": "Storage I/O Control normalized latency",
    "summary": "Storage I/O Control size-normalized I/O latency",
    "unit": {
      "key": "microsecond",
      "label": "Microsecond",
      "summary": "Microsecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "throughput.usage",
    "label": "usage",
    "summary": "usage",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "throughput.contention",
    "label": "contention",
    "summary": "contention",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "busResets",
    "label": "busResets",
    "summary": "busResets",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "commandsAborted",
    "label": "commandsAborted",
    "summary": "commandsAborted",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "siocActiveTimePercentage",
    "label": "Storage I/O Control active time percentage",
    "summary": "Percentage of time Storage I/O Control actively controlled datastore latency",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "throughput.cont",
    "label": "Storage Path Throughput Contention",
    "summary": "Average amount of time for an I/O operation to complete",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "maxTotalLatency",
    "label": "Highest latency",
    "summary": "Highest latency value across all storage paths used by the host",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "throughput.usage",
    "label": "Virtual Disk Throughput Usage",
    "summary": "Virtual disk I/O rate",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "commandsAborted",
    "label": "Number of virtual disk terminations",
    "summary": "Number of aborts to a virtual disk",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "busResets",
    "label": "Number of virtual disk resets",
    "summary": "Number of virtual disk reset operations",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "outstandingIOs",
    "label": "Storage Adapter Outstanding I/Os",
    "summary": "The number of I/Os that have been issued but have not yet completed",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "queued",
    "label": "Storage Adapter Number Queued",
    "summary": "The current number of I/Os that are waiting to be issued",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "queueDepth",
    "label": "Storage Adapter Queue Depth",
    "summary": "The maximum number of I/Os that can be outstanding at a given time",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "queueLatency",
    "label": "Storage Adapter Queue Command Latency",
    "summary": "Average amount of time spent in the VMkernel queue, per SCSI command, during the collection interval",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "throughput.usag",
    "label": "Storage Adapter Throughput Usage",
    "summary": "The storage adapter I/O rate",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "busResets",
    "label": "Storage Path Bus Resets",
    "summary": "Number of SCSI-bus reset commands issued during the collection interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "commandsAborted",
    "label": "Storage Path Command Aborts",
    "summary": "Number of SCSI commands aborted during the collection interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "throughput.usage",
    "label": "Storage Path Throughput Usage",
    "summary": "Storage path I/O rate",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "throughput.usage.vm",
    "label": "pNic Throughput Usage for VMs",
    "summary": "Average pNic I/O rate for VMs",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "throughput.usage.nfs",
    "label": "pNic Throughput Usage for NFS",
    "summary": "Average pNic I/O rate for NFS",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "throughput.usage.vmotion",
    "label": "pNic Throughput Usage for vMotion",
    "summary": "Average pNic I/O rate for vMotion",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "throughput.usage.ft",
    "label": "pNic Throughput Usage for FT",
    "summary": "Average pNic I/O rate for FT",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "throughput.usage.iscsi",
    "label": "pNic Throughput Usage for iSCSI",
    "summary": "Average pNic I/O rate for iSCSI",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "throughput.usage.hbr",
    "label": "pNic Throughput Usage for HBR",
    "summary": "Average pNic I/O rate for HBR",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "capacity.usable",
    "label": "Host Power Capacity Usable",
    "summary": "Current maximum allowed power usage",
    "unit": {
      "key": "watt",
      "label": "Watt",
      "summary": "Watt"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "capacity.usage",
    "label": "Power Capacity Usage",
    "summary": "Current power usage",
    "unit": {
      "key": "watt",
      "label": "Watt",
      "summary": "Watt"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "cpuentitlement",
    "label": "Worst case allocation",
    "summary": "Amount of CPU resources allocated to the virtual machine or resource pool, based on the total cluster capacity and the resource configuration of the resource hierarchy",
    "unit": {
      "key": "megaHertz",
      "label": "MHz",
      "summary": "Megahertz"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "mementitlement",
    "label": "Worst case allocation",
    "summary": "Memory allocation as calculated by the VMkernel scheduler based on current estimated demand and reservation, limit, and shares policies set for all virtual machines and resource pools in the host or cluster",
    "unit": {
      "key": "megaBytes",
      "label": "MB",
      "summary": "Megabytes"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "cpufairness",
    "label": "CPU fairness",
    "summary": "Fairness of distributed CPU resource allocation",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "memfairness",
    "label": "Memory fairness",
    "summary": "Aggregate available memory resources of all the hosts within a cluster",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "numPoweron",
    "label": "VM power on count",
    "summary": "Number of virtual machine power on operations",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "numPoweroff",
    "label": "VM power off count",
    "summary": "Number of virtual machine power off operations",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "numSuspend",
    "label": "VM suspend count",
    "summary": "Number of virtual machine suspend operations",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "numReset",
    "label": "VM reset count",
    "summary": "Number of virtual machine reset operations",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "numRebootGuest",
    "label": "VM guest reboot count",
    "summary": "Number of virtual machine guest reboot operations",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "numStandbyGuest",
    "label": "VM standby guest count",
    "summary": "Number of virtual machine standby guest operations",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "numShutdownGuest",
    "label": "VM guest shutdown count",
    "summary": "Number of virtual machine guest shutdown operations",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "numCreate",
    "label": "VM create count",
    "summary": "Number of virtual machine create operations",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "numDestroy",
    "label": "VM delete count",
    "summary": "Number of virtual machine delete operations",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "numRegister",
    "label": "VM register count",
    "summary": "Number of virtual machine register operations",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "numUnregister",
    "label": "VM unregister count",
    "summary": "Number of virtual machine unregister operations",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "numReconfigure",
    "label": "VM reconfigure count",
    "summary": "Number of virtual machine reconfigure operations",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "numClone",
    "label": "VM clone count",
    "summary": "Number of virtual machine clone operations",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "numDeploy",
    "label": "VM template deploy count",
    "summary": "Number of virtual machine template deploy operations",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "numChangeHost",
    "label": "VM host change count (non-powered-on VMs)",
    "summary": "Number of host change operations for powered-off and suspended VMs",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "numChangeDS",
    "label": "VM datastore change count (non-powered-on VMs)",
    "summary": "Number of datastore change operations for powered-off and suspended virtual machines",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "numChangeHostDS",
    "label": "VM host and datastore change count (non-powered-on VMs)",
    "summary": "Number of host and datastore change operations for powered-off and suspended virtual machines",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "numVMotion",
    "label": "vMotion count",
    "summary": "Number of migrations with vMotion (host change operations for powered-on VMs)",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "numSVMotion",
    "label": "Storage vMotion count",
    "summary": "Number of migrations with Storage vMotion (datastore change operations for powered-on VMs)",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "effectivecpu",
    "label": "Effective CPU resources",
    "summary": "Total available CPU resources of all hosts within a cluster",
    "unit": {
      "key": "megaHertz",
      "label": "MHz",
      "summary": "Megahertz"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "effectivemem",
    "label": "Effective memory resources",
    "summary": "Total amount of machine memory of all hosts in the cluster that is available for use for virtual machine memory and overhead memory",
    "unit": {
      "key": "megaBytes",
      "label": "MB",
      "summary": "Megabytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "totalmhz",
    "label": "Total",
    "summary": "Total amount of CPU resources of all hosts in the cluster",
    "unit": {
      "key": "megaHertz",
      "label": "MHz",
      "summary": "Megahertz"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "totalmb",
    "label": "Total",
    "summary": "Total amount of host physicalmemory of all hosts in the cluster that is available for virtual machine memory (physical memory for use by the guest OS) and virtual machine overhead memory",
    "unit": {
      "key": "megaBytes",
      "label": "MB",
      "summary": "Megabytes"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "failover",
    "label": "Current failover level",
    "summary": "vSphere HA number of failures that can be tolerated",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "used",
    "label": "Space actually used",
    "summary": "Amount of space actually used by the virtual machine or the datastore",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "provisioned",
    "label": "Space potentially used",
    "summary": "Amount of storage set aside for use by a datastore or a virtual machine",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "capacity",
    "label": "Capacity",
    "summary": "Configured size of the datastore",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "unshared",
    "label": "Space not shared",
    "summary": "Amount of space associated exclusively with a virtual machine",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "deltaused",
    "label": "Overhead due to delta disk backings",
    "summary": "Storage overhead of a virtual machine or a datastore due to delta disk backings",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "capacity.provisioned",
    "label": "provisioned",
    "summary": "provisioned",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "capacity.usage",
    "label": "usage",
    "summary": "usage",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "capacity.contention",
    "label": "contention",
    "summary": "contention",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "activationlatencystats",
    "label": "Activation latency",
    "summary": "The latency of an activation operation in vCenter Server",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "activationlatencystats",
    "label": "Activation latency",
    "summary": "The latency of an activation operation in vCenter Server",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "absolute",
    "key": "activationlatencystats",
    "label": "Activation latency",
    "summary": "The latency of an activation operation in vCenter Server",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "activationstats",
    "label": "Activation count",
    "summary": "Activation operations in vCenter Server",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "activationstats",
    "label": "Activation count",
    "summary": "Activation operations in vCenter Server",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "absolute",
    "key": "activationstats",
    "label": "Activation count",
    "summary": "Activation operations in vCenter Server",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "buffersz",
    "label": "buffersz",
    "summary": "buffersz",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "cachesz",
    "label": "cachesz",
    "summary": "cachesz",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "ctxswitchesrate",
    "label": "Context switch rate",
    "summary": "Number of context switches per second on the system where vCenter Server is running",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "diskreadsectorrate",
    "label": "diskreadsectorrate",
    "summary": "diskreadsectorrate",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "diskreadsrate",
    "label": "Disk read rate",
    "summary": "Number of disk reads per second on the system where vCenter Server is running",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "diskwritesectorrate",
    "label": "diskwritesectorrate",
    "summary": "diskwritesectorrate",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "diskwritesrate",
    "label": "Disk write rate",
    "summary": "Number of disk writes per second on the system where vCenter Server is running",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "hostsynclatencystats",
    "label": "Host sync latency",
    "summary": "The latency of a host sync operation in vCenter Server",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "hostsynclatencystats",
    "label": "Host sync latency",
    "summary": "The latency of a host sync operation in vCenter Server",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "absolute",
    "key": "hostsynclatencystats",
    "label": "Host sync latency",
    "summary": "The latency of a host sync operation in vCenter Server",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "hostsyncstats",
    "label": "Host sync count",
    "summary": "The number of host sync operations in vCenter Server",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "hostsyncstats",
    "label": "Host sync count",
    "summary": "The number of host sync operations in vCenter Server",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "absolute",
    "key": "hostsyncstats",
    "label": "Host sync count",
    "summary": "The number of host sync operations in vCenter Server",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "inventorystats",
    "label": "Inventory statistics",
    "summary": "vCenter Server inventory statistics",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "inventorystats",
    "label": "Inventory statistics",
    "summary": "vCenter Server inventory statistics",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "absolute",
    "key": "inventorystats",
    "label": "Inventory statistics",
    "summary": "vCenter Server inventory statistics",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "lockstats",
    "label": "Locking statistics",
    "summary": "vCenter Server locking statistics",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "lockstats",
    "label": "Locking statistics",
    "summary": "vCenter Server locking statistics",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "absolute",
    "key": "lockstats",
    "label": "Locking statistics",
    "summary": "vCenter Server locking statistics",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "lrostats",
    "label": "vCenter Server LRO statistics",
    "summary": "vCenter Server LRO statistics",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "lrostats",
    "label": "vCenter Server LRO statistics",
    "summary": "vCenter Server LRO statistics",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "absolute",
    "key": "lrostats",
    "label": "vCenter Server LRO statistics",
    "summary": "vCenter Server LRO statistics",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "miscstats",
    "label": "Miscellaneous",
    "summary": "Miscellaneous statistics",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "miscstats",
    "label": "Miscellaneous",
    "summary": "Miscellaneous statistics",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "absolute",
    "key": "miscstats",
    "label": "Miscellaneous",
    "summary": "Miscellaneous statistics",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "morefregstats",
    "label": "Managed object reference statistics",
    "summary": "Managed object reference counts in vCenter Server",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "morefregstats",
    "label": "Managed object reference statistics",
    "summary": "Managed object reference counts in vCenter Server",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "absolute",
    "key": "morefregstats",
    "label": "Managed object reference statistics",
    "summary": "Managed object reference counts in vCenter Server",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "packetrecvrate",
    "label": "Received packet rate",
    "summary": "Rate of the number of total packets received per second on the system where vCenter Server is running",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "packetsentrate",
    "label": "Sent packet rate",
    "summary": "Number of total packets sent per second on the system where vCenter Server is running",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "systemcpuusage",
    "label": "CPU system",
    "summary": "Total system CPU used on the system where vCenter Server in running",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "pagefaultrate",
    "label": "Page fault rate",
    "summary": "Number of page faults per second on the system where vCenter Server is running",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "physicalmemusage",
    "label": "Physical memory",
    "summary": "Physical memory used by vCenter",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "priviledgedcpuusage",
    "label": "CPU privileged",
    "summary": "CPU used by vCenter Server in privileged mode",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "scoreboard",
    "label": "Scoreboard statistics",
    "summary": "Object counts in vCenter Server",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "scoreboard",
    "label": "Scoreboard statistics",
    "summary": "Object counts in vCenter Server",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "absolute",
    "key": "scoreboard",
    "label": "Scoreboard statistics",
    "summary": "Object counts in vCenter Server",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "sessionstats",
    "label": "Session statistics",
    "summary": "The statistics of client sessions connected to vCenter Server",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "sessionstats",
    "label": "Session statistics",
    "summary": "The statistics of client sessions connected to vCenter Server",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "absolute",
    "key": "sessionstats",
    "label": "Session statistics",
    "summary": "The statistics of client sessions connected to vCenter Server",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "syscallsrate",
    "label": "System call rate",
    "summary": "Number of systems calls made per second on the system where vCenter Server is running",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "systemstats",
    "label": "System statistics",
    "summary": "The statistics of vCenter Server as a running system such as thread statistics and heap statistics",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "systemstats",
    "label": "System statistics",
    "summary": "The statistics of vCenter Server as a running system such as thread statistics and heap statistics",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "absolute",
    "key": "systemstats",
    "label": "System statistics",
    "summary": "The statistics of vCenter Server as a running system such as thread statistics and heap statistics",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "usercpuusage",
    "label": "CPU user",
    "summary": "CPU used by vCenter Server in user mode",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "vcservicestats",
    "label": "vCenter Server service statistics",
    "summary": "vCenter service statistics such as events, alarms, and tasks",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "vcservicestats",
    "label": "vCenter Server service statistics",
    "summary": "vCenter service statistics such as events, alarms, and tasks",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "absolute",
    "key": "vcservicestats",
    "label": "vCenter Server service statistics",
    "summary": "vCenter service statistics such as events, alarms, and tasks",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "virtualmemusage",
    "label": "Virtual memory",
    "summary": "Virtual memory used by vCenter Server",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "readOIO",
    "label": "Average number of outstanding read requests",
    "summary": "Average number of outstanding read requests to the virtual disk during the collection interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "writeOIO",
    "label": "Average number of outstanding write requests",
    "summary": "Average number of outstanding write requests to the virtual disk during the collection interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "readLoadMetric",
    "label": "Read workload metric",
    "summary": "Storage DRS virtual disk metric for the read workload model",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "writeLoadMetric",
    "label": "Write workload metric",
    "summary": "Storage DRS virtual disk metric for the write workload model",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "datastoreReadBytes",
    "label": "Storage DRS datastore bytes read",
    "summary": "Storage DRS datastore bytes read",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "datastoreWriteBytes",
    "label": "Storage DRS datastore bytes written",
    "summary": "Storage DRS datastore bytes written",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "datastoreReadIops",
    "label": "Storage DRS datastore read I/O rate",
    "summary": "Storage DRS datastore read I/O rate",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "datastoreWriteIops",
    "label": "Storage DRS datastore write I/O rate",
    "summary": "Storage DRS datastore write I/O rate",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "datastoreReadOIO",
    "label": "Storage DRS datastore outstanding read requests",
    "summary": "Storage DRS datastore outstanding read requests",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "datastoreWriteOIO",
    "label": "Storage DRS datastore outstanding write requests",
    "summary": "Storage DRS datastore outstanding write requests",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "datastoreNormalReadLatency",
    "label": "Storage DRS datastore normalized read latency",
    "summary": "Storage DRS datastore normalized read latency",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "datastoreNormalWriteLatency",
    "label": "Storage DRS datastore normalized write latency",
    "summary": "Storage DRS datastore normalized write latency",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "datastoreReadLoadMetric",
    "label": "Storage DRS datastore read workload metric",
    "summary": "Storage DRS datastore metric for read workload model",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "datastoreWriteLoadMetric",
    "label": "Storage DRS datastore write workload metric",
    "summary": "Storage DRS datastore metric for write workload model",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "datastoreVMObservedLatency",
    "label": "Datastore latency observed by VMs",
    "summary": "The average datastore latency as seen by virtual machines",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "swapwait",
    "label": "Swap wait",
    "summary": "CPU time spent waiting for swap-in",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "none",
    "statsType": "rate",
    "key": "utilization",
    "label": "Utilization",
    "summary": "CPU utilization as a percentage during the interval (CPU usage and CPU utilization might be different due to power management technologies or hyper-threading)",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "utilization",
    "label": "Utilization",
    "summary": "CPU utilization as a percentage during the interval (CPU usage and CPU utilization might be different due to power management technologies or hyper-threading)",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "rate",
    "key": "utilization",
    "label": "Utilization",
    "summary": "CPU utilization as a percentage during the interval (CPU usage and CPU utilization might be different due to power management technologies or hyper-threading)",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "rate",
    "key": "utilization",
    "label": "Utilization",
    "summary": "CPU utilization as a percentage during the interval (CPU usage and CPU utilization might be different due to power management technologies or hyper-threading)",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "none",
    "statsType": "rate",
    "key": "coreUtilization",
    "label": "Core Utilization",
    "summary": "CPU utilization of the corresponding core (if hyper-threading is enabled) as a percentage during the interval (A core is utilized if either or both of its logical CPUs are utilized)",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "coreUtilization",
    "label": "Core Utilization",
    "summary": "CPU utilization of the corresponding core (if hyper-threading is enabled) as a percentage during the interval (A core is utilized if either or both of its logical CPUs are utilized)",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "rate",
    "key": "coreUtilization",
    "label": "Core Utilization",
    "summary": "CPU utilization of the corresponding core (if hyper-threading is enabled) as a percentage during the interval (A core is utilized if either or both of its logical CPUs are utilized)",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "rate",
    "key": "coreUtilization",
    "label": "Core Utilization",
    "summary": "CPU utilization of the corresponding core (if hyper-threading is enabled) as a percentage during the interval (A core is utilized if either or both of its logical CPUs are utilized)",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "totalCapacity",
    "label": "Total capacity",
    "summary": "Total CPU capacity reserved by and available for virtual machines",
    "unit": {
      "key": "megaHertz",
      "label": "MHz",
      "summary": "Megahertz"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "latency",
    "label": "Latency",
    "summary": "Percent of time the virtual machine is unable to run because it is contending for access to the physical CPU(s)",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "entitlement",
    "label": "Entitlement",
    "summary": "CPU resources devoted by the ESX scheduler",
    "unit": {
      "key": "megaHertz",
      "label": "MHz",
      "summary": "Megahertz"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "demand",
    "label": "Demand",
    "summary": "The amount of CPU resources a virtual machine would use if there were no CPU contention or CPU limit",
    "unit": {
      "key": "megaHertz",
      "label": "MHz",
      "summary": "Megahertz"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "costop",
    "label": "Co-stop",
    "summary": "Time the virtual machine is ready to run, but is unable to run due to co-scheduling constraints",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "maxlimited",
    "label": "Max limited",
    "summary": "Time the virtual machine is ready to run, but is not run due to maxing out its CPU limit setting",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "overlap",
    "label": "Overlap",
    "summary": "Time the virtual machine was interrupted to perform system services on behalf of itself or other virtual machines",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "run",
    "label": "Run",
    "summary": "Time the virtual machine is scheduled to run",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "swapin",
    "label": "Swap in",
    "summary": "Amount swapped-in to memory from disk",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "swapin",
    "label": "Swap in",
    "summary": "Amount swapped-in to memory from disk",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "swapin",
    "label": "Swap in",
    "summary": "Amount swapped-in to memory from disk",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "swapin",
    "label": "Swap in",
    "summary": "Amount swapped-in to memory from disk",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "swapout",
    "label": "Swap out",
    "summary": "Amount of memory swapped-out to disk",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "swapout",
    "label": "Swap out",
    "summary": "Amount of memory swapped-out to disk",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "swapout",
    "label": "Swap out",
    "summary": "Amount of memory swapped-out to disk",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "swapout",
    "label": "Swap out",
    "summary": "Amount of memory swapped-out to disk",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "sysUsage",
    "label": "Used by VMkernel",
    "summary": "Amount of host physicalmemory used by VMkernel for core functionality, such as device drivers and other internal uses",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "sysUsage",
    "label": "Used by VMkernel",
    "summary": "Amount of host physicalmemory used by VMkernel for core functionality, such as device drivers and other internal uses",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "sysUsage",
    "label": "Used by VMkernel",
    "summary": "Amount of host physicalmemory used by VMkernel for core functionality, such as device drivers and other internal uses",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "sysUsage",
    "label": "Used by VMkernel",
    "summary": "Amount of host physicalmemory used by VMkernel for core functionality, such as device drivers and other internal uses",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "activewrite",
    "label": "Active write",
    "summary": "Estimate for the amount of memory actively being written to by the virtual machine",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "overheadMax",
    "label": "Reserved overhead",
    "summary": "Host physical memory (KB) reserved for use as the virtualization overhead for the virtual machine",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "totalCapacity",
    "label": "Total capacity",
    "summary": "Total amount of memory reservation used by and available for powered-on virtual machines and vSphere services on the host",
    "unit": {
      "key": "megaBytes",
      "label": "MB",
      "summary": "Megabytes"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "zipped",
    "label": "Zipped memory",
    "summary": "Memory (KB) zipped",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "zipSaved",
    "label": "Memory saved by zipping",
    "summary": "Memory (KB) saved due to memory zipping",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "latency",
    "label": "Latency",
    "summary": "Percentage of time the virtual machine is waiting to access swapped or compressed memory",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "entitlement",
    "label": "Entitlement",
    "summary": "Amount of host physical memory the virtual machine is entitled to, as determined by the ESX scheduler",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "lowfreethreshold",
    "label": "Low free threshold",
    "summary": "Threshold of free host physical memory below which ESX/ESXi will begin reclaiming memory from virtual machines through ballooning and swapping",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "llSwapUsed",
    "label": "Host cache used for swapping",
    "summary": "Space used for caching swapped pages in the host cache",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "llSwapInRate",
    "label": "Swap in rate from host cache",
    "summary": "Rate at which memory is being swapped from host cache into active memory",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "llSwapOutRate",
    "label": "Swap out rate to host cache",
    "summary": "Rate at which memory is being swapped from active memory to host cache",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "overheadTouched",
    "label": "Overhead touched",
    "summary": "Actively touched overhead host physical memory (KB) reserved for use as the virtualization overhead for the virtual machine",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "llSwapUsed",
    "label": "Host cache used for swapping",
    "summary": "Space used for caching swapped pages in the host cache",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "llSwapUsed",
    "label": "Host cache used for swapping",
    "summary": "Space used for caching swapped pages in the host cache",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "llSwapUsed",
    "label": "Host cache used for swapping",
    "summary": "Space used for caching swapped pages in the host cache",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "llSwapIn",
    "label": "Swap in from host cache",
    "summary": "Amount of memory swapped-in from host cache",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "llSwapIn",
    "label": "Swap in from host cache",
    "summary": "Amount of memory swapped-in from host cache",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "llSwapIn",
    "label": "Swap in from host cache",
    "summary": "Amount of memory swapped-in from host cache",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "llSwapIn",
    "label": "Swap in from host cache",
    "summary": "Amount of memory swapped-in from host cache",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "none",
    "statsType": "absolute",
    "key": "llSwapOut",
    "label": "Swap out to host cache",
    "summary": "Amount of memory swapped-out to host cache",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "llSwapOut",
    "label": "Swap out to host cache",
    "summary": "Amount of memory swapped-out to host cache",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "absolute",
    "key": "llSwapOut",
    "label": "Swap out to host cache",
    "summary": "Amount of memory swapped-out to host cache",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "absolute",
    "key": "llSwapOut",
    "label": "Swap out to host cache",
    "summary": "Amount of memory swapped-out to host cache",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "commands",
    "label": "Commands issued",
    "summary": "Number of SCSI commands issued during the collection interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "deviceReadLatency",
    "label": "Physical device read latency",
    "summary": "Average amount of time, in milliseconds, to read from the physical device",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "kernelReadLatency",
    "label": "Kernel read latency",
    "summary": "Average amount of time, in milliseconds, spent by VMkernel to process each SCSI read command",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "totalReadLatency",
    "label": "Read latency",
    "summary": "Average amount of time taken during the collection interval to process a SCSI read command issued from the guest OS to the virtual machine",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "queueReadLatency",
    "label": "Queue read latency",
    "summary": "Average amount of time spent in the VMkernel queue, per SCSI read command, during the collection interval",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "deviceWriteLatency",
    "label": "Physical device write latency",
    "summary": "Average amount of time, in milliseconds, to write to the physical device",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "kernelWriteLatency",
    "label": "Kernel write latency",
    "summary": "Average amount of time, in milliseconds, spent by VMkernel to process each SCSI write command",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "totalWriteLatency",
    "label": "Write latency",
    "summary": "Average amount of time taken during the collection interval to process a SCSI write command issued by the guest OS to the virtual machine",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "queueWriteLatency",
    "label": "Queue write latency",
    "summary": "Average amount of time spent in the VMkernel queue, per SCSI write command, during the collection interval",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "deviceLatency",
    "label": "Physical device command latency",
    "summary": "Average amount of time, in milliseconds, to complete a SCSI command from the physical device",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "kernelLatency",
    "label": "Kernel command latency",
    "summary": "Average amount of time, in milliseconds, spent by VMkernel to process each SCSI command",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "queueLatency",
    "label": "Queue command latency",
    "summary": "Average amount of time spent in the VMkernel queue, per SCSI command, during the collection interval",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "maxQueueDepth",
    "label": "Maximum queue depth",
    "summary": "Maximum queue depth",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "commandsAveraged",
    "label": "Average commands issued per second",
    "summary": "Average number of SCSI commands issued per second during the collection interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "droppedRx",
    "label": "Receive packets dropped",
    "summary": "Number of receives dropped",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "droppedTx",
    "label": "Transmit packets dropped",
    "summary": "Number of transmits dropped",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "bytesRx",
    "label": "Data receive rate",
    "summary": "Average amount of data received per second",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "bytesTx",
    "label": "Data transmit rate",
    "summary": "Average amount of data transmitted per second",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "broadcastRx",
    "label": "Broadcast receives",
    "summary": "Number of broadcast packets received during the sampling interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "broadcastTx",
    "label": "Broadcast transmits",
    "summary": "Number of broadcast packets transmitted during the sampling interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "multicastRx",
    "label": "Multicast receives",
    "summary": "Number of multicast packets received during the sampling interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "multicastTx",
    "label": "Multicast transmits",
    "summary": "Number of multicast packets transmitted during the sampling interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "errorsRx",
    "label": "Packet receive errors",
    "summary": "Number of packets with errors received during the sampling interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "errorsTx",
    "label": "Packet transmit errors",
    "summary": "Number of packets with errors transmitted during the sampling interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "summation",
    "statsType": "delta",
    "key": "unknownProtos",
    "label": "Unknown protocol frames",
    "summary": "Number of frames with unknown protocol received during the sampling interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "diskUsage",
    "label": "Disk usage",
    "summary": "Amount of disk space usage for each mount point",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "none",
    "statsType": "rate",
    "key": "resourceCpuUsage",
    "label": "Resource CPU usage (None)",
    "summary": "Amount of CPU used by the Service Console and other applications during the interval",
    "unit": {
      "key": "megaHertz",
      "label": "MHz",
      "summary": "Megahertz"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "resourceCpuUsage",
    "label": "Resource CPU usage (Average)",
    "summary": "Amount of CPU used by the Service Console and other applications during the interval",
    "unit": {
      "key": "megaHertz",
      "label": "MHz",
      "summary": "Megahertz"
    }
  },
  {
    "rollupType": "maximum",
    "statsType": "rate",
    "key": "resourceCpuUsage",
    "label": "Resource CPU usage (Maximum)",
    "summary": "Amount of CPU used by the Service Console and other applications during the interval",
    "unit": {
      "key": "megaHertz",
      "label": "MHz",
      "summary": "Megahertz"
    }
  },
  {
    "rollupType": "minimum",
    "statsType": "rate",
    "key": "resourceCpuUsage",
    "label": "Resource CPU usage (Minimum)",
    "summary": "Amount of CPU used by the Service Console and other applications during the interval",
    "unit": {
      "key": "megaHertz",
      "label": "MHz",
      "summary": "Megahertz"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "resourceMemTouched",
    "label": "Resource memory touched",
    "summary": "Memory touched by the system resource group",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "resourceMemMapped",
    "label": "Resource memory mapped",
    "summary": "Memory mapped by the system resource group",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "resourceMemShared",
    "label": "Resource memory share saved",
    "summary": "Memory saved due to sharing by the system resource group",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "resourceMemSwapped",
    "label": "Resource memory swapped",
    "summary": "Memory swapped out by the system resource group",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "resourceMemOverhead",
    "label": "Resource memory overhead",
    "summary": "Overhead memory consumed by the system resource group",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "resourceMemCow",
    "label": "Resource memory shared",
    "summary": "Memory shared by the system resource group",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "resourceMemZero",
    "label": "Resource memory zero",
    "summary": "Zero filled memory used by the system resource group",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "resourceCpuRun1",
    "label": "Resource CPU running (1 min. average)",
    "summary": "CPU running average over 1 minute of the system resource group",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "resourceCpuAct1",
    "label": "Resource CPU active (1 min average)",
    "summary": "CPU active average over 1 minute of the system resource group",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "resourceCpuMaxLimited1",
    "label": "Resource CPU maximum limited (1 min)",
    "summary": "CPU maximum limited over 1 minute of the system resource group",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "resourceCpuRun5",
    "label": "Resource CPU running (5 min average)",
    "summary": "CPU running average over 5 minutes of the system resource group",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "resourceCpuAct5",
    "label": "Resource CPU active (5 min average)",
    "summary": "CPU active average over 5 minutes of the system resource group",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "resourceCpuMaxLimited5",
    "label": "Resource CPU maximum limited (5 min)",
    "summary": "CPU maximum limited over 5 minutes of the system resource group",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "resourceCpuAllocMin",
    "label": "Resource CPU allocation minimum (in MHz)",
    "summary": "CPU allocation reservation (in MHz) of the system resource group",
    "unit": {
      "key": "megaHertz",
      "label": "MHz",
      "summary": "Megahertz"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "resourceCpuAllocMax",
    "label": "Resource CPU allocation maximum (in MHz)",
    "summary": "CPU allocation limit (in MHz) of the system resource group",
    "unit": {
      "key": "megaHertz",
      "label": "MHz",
      "summary": "Megahertz"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "resourceCpuAllocShares",
    "label": "Resource CPU allocation shares",
    "summary": "CPU allocation shares of the system resource group",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "resourceMemAllocMin",
    "label": "Resource memory allocation minimum (in KB)",
    "summary": "Memory allocation reservation (in KB) of the system resource group",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "resourceMemAllocMax",
    "label": "Resource memory allocation maximum (in KB)",
    "summary": "Memory allocation limit (in KB) of the system resource group",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "resourceMemAllocShares",
    "label": "Resource memory allocation shares",
    "summary": "Memory allocation shares of the system resource group",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "osUptime",
    "label": "OS Uptime",
    "summary": "Total time elapsed, in seconds, since last operating system boot-up",
    "unit": {
      "key": "second",
      "label": "Second",
      "summary": "Second"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "resourceMemConsumed",
    "label": "Resource memory consumed",
    "summary": "resourceMemConsumed",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "actav1",
    "label": "Active (1 min average)",
    "summary": "CPU active average over 1 minute",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "actpk1",
    "label": "Active (1 min peak)",
    "summary": "CPU active peak over 1 minute",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "runav1",
    "label": "Running (1 min average)",
    "summary": "CPU running average over 1 minute",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "actav5",
    "label": "Active (5 min average)",
    "summary": "CPU active average over 5 minutes",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "actpk5",
    "label": "Active (5 min peak)",
    "summary": "CPU active peak over 5 minutes",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "runav5",
    "label": "Running (5 min average)",
    "summary": "CPU running average over 5 minutes",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "actav15",
    "label": "Active (15 min average)",
    "summary": "CPU active average over 15 minutes",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "actpk15",
    "label": "Active (15 min peak)",
    "summary": "CPU active peak over 15 minutes",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "runav15",
    "label": "Running (15 min average)",
    "summary": "CPU running average over 15 minutes",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "runpk1",
    "label": "Running (1 min peak)",
    "summary": "CPU running peak over 1 minute",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "maxLimited1",
    "label": "Throttled (1 min average)",
    "summary": "Amount of CPU resources over the limit that were refused, average over 1 minute",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "runpk5",
    "label": "Running (5 min peak)",
    "summary": "CPU running peak over 5 minutes",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "maxLimited5",
    "label": "Throttled (5 min average)",
    "summary": "Amount of CPU resources over the limit that were refused, average over 5 minutes",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "runpk15",
    "label": "Running (15 min peak)",
    "summary": "CPU running peak over 15 minutes",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "maxLimited15",
    "label": "Throttled (15 min average)",
    "summary": "Amount of CPU resources over the limit that were refused, average over 15 minutes",
    "unit": {
      "key": "percent",
      "label": "Percent",
      "summary": "Percentage"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "sampleCount",
    "label": "Group CPU sample count",
    "summary": "Group CPU sample count",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "samplePeriod",
    "label": "Group CPU sample period",
    "summary": "Group CPU sample period",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "memUsed",
    "label": "Memory used",
    "summary": "Amount of total configured memory that is available for use",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "swapUsed",
    "label": "Memory swap used",
    "summary": "Sum of the memory swapped by all powered-on virtual machines on the host",
    "unit": {
      "key": "kiloBytes",
      "label": "KB",
      "summary": "Kilobytes"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "cpuUsage",
    "label": "CPU usage",
    "summary": "Amount of Service Console CPU usage",
    "unit": {
      "key": "megaHertz",
      "label": "MHz",
      "summary": "Megahertz"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "commandsAveraged",
    "label": "Average commands issued per second",
    "summary": "Average number of commands issued per second on the storage path during the collection interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "numberReadAveraged",
    "label": "Average read requests per second",
    "summary": "Average number of read commands issued per second on the storage path during the collection interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "numberWriteAveraged",
    "label": "Average write requests per second",
    "summary": "Average number of write commands issued per second on the storage path during the collection interval",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "read",
    "label": "Read rate",
    "summary": "Rate of reading data on the storage path",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "write",
    "label": "Write rate",
    "summary": "Rate of writing data on the storage path",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "totalReadLatency",
    "label": "Read latency",
    "summary": "The average time a read issued on the storage path takes",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "totalWriteLatency",
    "label": "Write latency",
    "summary": "The average time a write issued on the storage path takes",
    "unit": {
      "key": "millisecond",
      "label": "Millisecond",
      "summary": "Millisecond"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "readIOSize",
    "label": "Read request size",
    "summary": "Average read request size in bytes",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "writeIOSize",
    "label": "Write request size",
    "summary": "Average write request size in bytes",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "smallSeeks",
    "label": "Number of small seeks",
    "summary": "Number of seeks during the interval that were less than 64 LBNs apart",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "mediumSeeks",
    "label": "Number of medium seeks",
    "summary": "Number of seeks during the interval that were between 64 and 8192 LBNs apart",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "largeSeeks",
    "label": "Number of large seeks",
    "summary": "Number of seeks during the interval that were greater than 8192 LBNs apart",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "readLatencyUS",
    "label": "Read Latency (us)",
    "summary": "Read latency in microseconds",
    "unit": {
      "key": "microsecond",
      "label": "Microsecond",
      "summary": "Microsecond"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "writeLatencyUS",
    "label": "Write Latency (us)",
    "summary": "Write latency in microseconds",
    "unit": {
      "key": "microsecond",
      "label": "Microsecond",
      "summary": "Microsecond"
    }
  },
  {
    "rollupType": "latest",
    "statsType": "absolute",
    "key": "datastoreMaxQueueDepth",
    "label": "Storage I/O Control datastore maximum queue depth",
    "summary": "Storage I/O Control datastore maximum queue depth",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "absolute",
    "key": "hbrNumVms",
    "label": "vSphere Replication VM Count",
    "summary": "Current number of replicated virtual machines",
    "unit": {
      "key": "number",
      "label": "Number",
      "summary": "Number"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "hbrNetRx",
    "label": "Replication Data Receive Rate",
    "summary": "Average amount of data received per second",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  },
  {
    "rollupType": "average",
    "statsType": "rate",
    "key": "hbrNetTx",
    "label": "Replication Data Transmit Rate",
    "summary": "Average amount of data transmitted per second",
    "unit": {
      "key": "kiloBytesPerSecond",
      "label": "KBps",
      "summary": "Kilobytes per second"
    }
  }
];
        return counterData[counterId];
    }
}

