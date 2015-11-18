(function () {
    'use strict';

    function dataService() {
        return {
            config: {
                rotatingBezelLeft: 'src/common/templates/rotating-bezel-left.tpl.html',
                rotatingBezelRight: 'src/common/templates/rotating-bezel-right.tpl.html',
                tapScreen: 'src/common/templates/tap-screen.tpl.html',
            },
            content: {
                sections: {
                    'aesthetic_elegant_design': {
                        name: 'aesthetic-elegant-design',
                        title: 'Aesthetic and Elegant Design',
                        description: 'Gear S2 comes full circle with a durable stainless steel body that sits slim and sleek on your wrist. Enjoy the perfect harmony between technology and design.',
                        route: 'root.aesthetic-elegant-design',
                        sections: {
                            'stylish_smart_gear': {
                                name: 'stylish-smart-gear',
                                title: 'Stylish Smart Gear',
                                route: 'root.aesthetic-elegant-design_stylish-smart-gear',
                                experience: {
                                    tabs: [
                                        {
                                            name: 'gears2',
                                            title: 'Gear S2',
                                            defaultColor: 'black',
                                            colors: {
                                                'black': {
                                                    name: 'black',
                                                    title: 'Dark Gray',
                                                    color: '#343434',
                                                    imagePrefix: 'gear2_sports_black',
                                                    imageCount: 66,
                                                },
                                                'silver': {
                                                    name: 'silver',
                                                    title: 'Silver',
                                                    color: '#D9D9D9',
                                                    imagePrefix: 'gear2_sports_white',
                                                    imageCount: 66,
                                                },
                                            },
                                            steps: [
                                                {
                                                    userActionRequired: true,
                                                    last: true,
                                                },
                                            ]
                                        },
                                        {
                                            name: 'gears2classic',
                                            title: 'Gear S2 Classic',
                                            defaultColor: 'classicblack',
                                            colors: {
                                                'classicblack': {
                                                    name: 'classicblack',
                                                    title: 'Black',
                                                    color: '#000000',
                                                    imagePrefix: 'gear2_classinc_black',
                                                    imageCount: 66,
                                                },
                                            },
                                            steps: [
                                                {
                                                    userActionRequired: true,
                                                    last: true,
                                                },
                                            ]
                                        },
                                    ],
                                },
                            },
                        },
                    },
                    'intuitive_experience': {
                        name: 'intuitive-experience',
                        title: 'Intuitive Experience',
                        route: 'root.intuitive-experience',
                        sections: {
                            'rotating_bezel': {
                                name: 'rotating-bezel',
                                title: 'Rotating Bezel',
                                route: 'root.intuitive-experience_rotating-bezel',
                                experience: {
                                    tabs: [
                                        {
                                            title: 'Horizontal Navigation',
                                            description: 'Bla bla',
                                            steps: [
                                                {
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 2,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 2,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 2,
                                                    last: true,
                                                },
                                            ],
                                        },
                                        {
                                            title: 'Vertical Navigation',
                                            description: 'Bla bla',
                                            steps: [
                                                {
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 0.5,
                                                },
                                                {
                                                    timeout: 0.5,
                                                },
                                                {
                                                    timeout: 0.5,
                                                },
                                                {
                                                    timeout: 2,
                                                    last: true,
                                                },
                                            ],
                                        },
                                        {
                                            title: 'Circular Navigation',
                                            description: 'Bla bla',
                                            steps: [
                                                {
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 0.5,
                                                },
                                                {
                                                    timeout: 2,
                                                    last: true,
                                                },
                                            ],
                                        },
                                        {
                                            title: 'Volume Control',
                                            description: 'Bla bla',
                                            last: true,
                                            steps: [
                                                {
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 0.5,
                                                },
                                                {
                                                    timeout: 2,
                                                    last: true,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                        },
                    },
                    'healthier_lifestyle': {
                        name: 'healthier-lifestyle',
                        title: 'Healthier Lifestyle',
                        route: 'root.healthier-lifestyle',
                        sections: {
                            'track_your_health': {
                                name: 'track-your-health',
                                title: 'Track Your Health',
                                description: 'Gear S2 comes full circle with a durable stainless steel body that sits slim and sleek on your wrist.',
                                route: 'root.healthier-lifestyle_track-your-health',
                                experience: {
                                    tabs: [
                                        {
                                            title: 'Auto Tracking',
                                            description: 'Bla bla',
                                            steps: [
                                                {
                                                    timeout: 2,
                                                    last: true,
                                                },
                                            ],
                                        },
                                        {
                                            title: 'Exercise',
                                            description: 'Bla bla',
                                            steps: [
                                                {
                                                    timeout: 2,
                                                    last: true,
                                                },
                                            ],
                                        },
                                        {
                                            title: 'Heart Rate',
                                            description: 'Bla bla',
                                            last: true,
                                            steps: [
                                                {
                                                    userActionRequired: true,
                                                    last: true,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                            'activity_log': {
                                name: '24h-activity-log',
                                title: '24H Activity Log',
                                route: 'root.healthier-lifestyle_24h-activity-log',
                                experience: {
                                    tabs: [
                                        {
                                            title: '24H Activity Log',
                                            description: 'Bla bla',
                                            last: true,
                                            steps: [
                                                {
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 2,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 2,
                                                },
                                                {
                                                    userActionRequired: true,
                                                    last: true,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                            'health_clock': {
                                name: 'health-clock',
                                title: 'Health Clock',
                                route: 'root.healthier-lifestyle_health-clock',
                                experience: {
                                    tabs: [
                                        {
                                            title: 'Health Clock',
                                            description: 'Bla bla',
                                            last: true,
                                            steps: [
                                                {
                                                    userActionRequired: true,
                                                    last: true,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                        },
                    },
                    'convenience_more': {
                        name: 'convenience-more',
                        title: 'Convenience & More',
                        route: 'root.convenience-more',
                        sections: {
                            'notifications': {
                                name: 'notifications',
                                title: 'Notifications',
                                route: 'root.convenience-more_notifications',
                                experience: {
                                    tabs: [
                                        {
                                            title: 'Check Messages',
                                            description: 'Gear S2 provides quick and easy access to notifications. From the\nwatch face, turn the bezel to the left to check your notifications.',
                                            steps: [
                                                {
                                                    title: 'Check Messages',
                                                    description: 'Gear S2 provides quick and easy access to notifications. From the\nwatch face, turn the bezel to the left to check your notifications.',
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 2,
                                                    last: true,
                                                },
                                            ],
                                        },
                                        {
                                            title: 'Send Messages',
                                            description: 'Gear S2 gives you four different ways\nto respond to messages from your wrist.',
                                            last: true,
                                            steps: [
                                                {
                                                    title: 'Send Messages', // 1
                                                    description: 'Gear S2 gives you four different ways\nto respond to messages from your wrist.',
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    title: 'Presets', // 3
                                                    description: 'Turn the bezel to select preset texts.\nYou can also add more presets from your phone.',
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                { // Animate bezel
                                                    timeout: 1,
                                                },
                                                { // Change screen
                                                    timeout: 1,
                                                },
                                                {
                                                    title: 'Voice Input', // 7
                                                    description: 'Select the S Voice icon to write messages\nwith your voice.',
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                { // Animate bezel
                                                    timeout: 1,
                                                },
                                                { // Change
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 2,
                                                },
                                                {
                                                    timeout: 2,
                                                },
                                                {
                                                    timeout: 2,
                                                },
                                                {
                                                    title: 'Emoticon', // 15
                                                    description: 'Choose from a variety of emoticons\nto send quick messages.',
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                { // Animate bezel
                                                    timeout: 1,
                                                },
                                                { // Change screen
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                { // Change screen
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 0.5,
                                                },
                                                {
                                                    timeout: 0.5,
                                                },
                                                {
                                                    timeout: 1.5,
                                                },
                                                { // Change screen
                                                    title: 'Keypads', // 25
                                                    description: 'Gear S2 also has a keypad to let you type\nmessages without taking out your phone.',
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                { // Animate bezel
                                                    timeout: 1,
                                                },
                                                { // Change screen
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                { // Change screen
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 0.5,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 0.5,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 0.5,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 0.5,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 0.5,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    userActionRequired: true,
                                                    last: true,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                            'samsung_pay': {
                                name: 'samsung-pay',
                                title: 'Samsung Pay',
                                route: 'root.convenience-more_samsung-pay',
                                disabled: true,
                                experience: {
                                    tabs: [
                                        {
                                            title: 'Samsung Pay',
                                            description: 'Bla bla',
                                            last: true,
                                            steps: [
                                                {
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 2,
                                                },
                                                {
                                                    timeout: 2,
                                                    last: true,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                            'additional_features': {
                                name: 'additional-features',
                                title: 'Additional Features',
                                route: 'root.convenience-more_additional-features',
                            },
                            'accessories': {
                                name: 'accessories',
                                title: 'Accessories',
                                description: 'Gear S2 provides a range of watch faces and watchbands that completes your personal style.\nThere are unique and colorful bands, including exclusive collection from Italian designer Alessandro Mendini, that brings his taste, humor, and sense of color to the Gear S2.',
                                route: 'root.convenience-more_accessories',
                                experience: {
                                    tabs: [
                                        {
                                            title: 'Accessories',
                                            description: 'Bla bla',
                                            last: true,
                                            steps: [
                                                {
                                                    userActionRequired: true,
                                                    last: true,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                        },
                    },
                    'customize_your_gear': {
                        name: 'customize-your-gear',
                        title: 'Customize your Gear S2',
                        description: 'You can transform the look of your Gear S2 by choosing from a wide variety of watch face and band options.\nTry on different designs, just like you mix and match your outfits everyday.',
                        route: 'root.customize-your-gear',
                        experience: {
                            tabs: [
                                {
                                    title: 'Customize your Gear S2',
                                    description: 'Bla bla',
                                    last: true,
                                    steps: [
                                        {
                                            userActionRequired: true,
                                            last: true,
                                        },
                                    ],
                                },
                            ],
                        },
                    },
                },
            },
            get: function () {
                return {
                    config: this.config,
                    content: this.content,
                };
            },
            getSectionByName: function (name, sections) {
                var self, subsection;
                self = this;
                subsection = false;
                if (sections === undefined) {
                    sections = this.content.sections;
                }
                for (var s in sections) {
                    if(s) {
                        var section = sections[s];
                        if (section.name === name) {
                            return section;
                        }
                        if (section.sections) {
                            subsection = self.getSectionByName(name, section.sections);
                            if (subsection !== false) {
                                return subsection;
                            }
                        }
                    }
                }
                return false;
            }
        };
    }

    angular.module('common.services.data', [])
            .factory('DataService', dataService);
})();
