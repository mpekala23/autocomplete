var completionSpec = {
    name: "pm2",
    description: "",
    subcommands: [
        {
            name: "start",
            description: "Start, daemonize and monitor your application",
            options: [
                {
                    name: "--name",
                    description: "Specify an app name",
                    args: {
                        name: "app name",
                    },
                },
                {
                    name: "--watch",
                    description: "Watch and restart app when files change",
                },
                {
                    name: "--max-memory-restart",
                    description: "Set memory threshold for app reload",
                    args: {
                        name: "threshold",
                    },
                },
                {
                    name: "--log",
                    description: "Specify log file",
                    args: {
                        name: "log path",
                    },
                },
                {
                    name: "--restart-delay",
                    description: "Delay between automatic restarts (ms)",
                    args: {
                        name: "delay (ms)",
                    },
                },
                {
                    name: "--time",
                    description: "Prefix logs with time",
                },
                {
                    name: "--no-autorestart",
                    description: "Do not auto restart app",
                },
                {
                    name: "--cron",
                    description: "Specify cron for forced restart",
                    args: {
                        name: "cron pattern",
                    },
                },
                {
                    name: "--no-daemon",
                    description: "Attatch to application log",
                },
            ],
            args: { template: "filepaths" },
        },
    ],
    options: [],
};

