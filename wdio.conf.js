exports.config = {
    runner: 'local',

    port: 4723,
    path: '/wd/hubsession',

    // specs: ['./tests/features/login.feature'],
    specs: ['./tests/features/ticketsflow.feature'],
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,

    capabilities: [
        {
            platformName: 'Android',
            'appium:deviceName': 'Pixel 3a XL',
            'appium:automationName': 'UIAutomator2',
            'appium:appPackage': 'com.cosm.cosmvenueapp',
            'appium:appActivity': 'com.cosm.cosmvenueapp.MainActivity',
            'appium:app': '/Users/monikayadav/Desktop/Cosm-Automation/bdd-appium-automation/apps/android/app-release.apk',
            'appium:udid': '9ARAX0LZ6Z',
            'appium:platformVersion': '12'
        }
    ],


    // capabilities: [
    //     {
    //         platformName: 'Android',
    //         'appium:platformVersion': '12',
    //         'appium:deviceName': 'Pixel 3a API 31',
    //         'appium:automationName': 'UIAutomator2',
    //         'appium:app': '/Users/monikayadav/Desktop/Cosm-Automation/appium-automation/app/android/app-release.apk'
    //     }

    // ],


    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://0.0.0.0',

    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        [
            'appium', {
                args: {
                    address: 'localhost',
                    port: 4723,
                    relaxedSecurity: true
                },
                logPath: './'
            }
        ]
    ],
    framework: 'cucumber',
    reporters: ['spec'],


    //
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        requireModule: [],
        // require: ['./tests/step-definitions/login.step.js'],
        require: ['./tests/step-definitions/orderticket.step.js'],
        backtrace: false,
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        source: true,
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },
    appium: {
        log: false,
        command: 'appium'
    },

    afterScenario: function (world, result, context) { // browser.closeApp()
        driver.resetApp();
    }


};
