(function () {
    'use strict';

    function dataService() {
        return {
            config: {
                rotatingBezelLeft: 'src/common/templates/rotating-bezel-left.tpl.html',
                rotatingBezelRight: 'src/common/templates/rotating-bezel-right.tpl.html',
            },
            content: {
                sections: [
                    {
                        name: 'aesthetic-elegant-design',
                        title: 'Aesthetic and Elegant Design',
                        description: 'Gear S2 comes full circle with a durable stainless steel body that sits slim and sleek on your wrist. Enjoy the perfect harmony between technology and design.',
                        route: 'root.aesthetic-elegant-design',
                        sections: [
                            {
                                name: 'stylish-smart-gear',
                                title: 'Stylish Smart Gear',
                                route: 'root.aesthetic-elegant-design_stylish-smart-gear',
                            },
                        ],
                    },
                    {
                        name: 'intuitive-experience',
                        title: 'Intuitive Experience',
                        route: 'root.intuitive-experience',
                        sections: [
                            {
                                name: 'rotating-bezel',
                                title: 'Rotating Bezel',
                                route: 'root.intuitive-experience_rotating-bezel',
                            },
                        ],
                    },
                    {
                        name: 'healthier-lifestyle',
                        title: 'Healthier Lifestyle',
                        route: 'root.healthier-lifestyle',
                        sections: [
                            {
                                name: 'track-your-health',
                                title: 'Track Your Health',
                                route: 'root.healthier-lifestyle_track-your-health',
                            },
                            {
                                name: '24h-activity-log',
                                title: '24H Activity Log',
                                route: 'root.healthier-lifestyle_24h-activity-log',
                            },
                            {
                                name: 'health-clock',
                                title: 'Health Clock',
                                route: 'root.healthier-lifestyle_health-clock',
                            },
                        ],
                    },
                    {
                        name: 'convenience-more',
                        title: 'Convenience & More',
                        route: 'root.convenience-more',
                        sections: [
                            {
                                name: 'notifications',
                                title: 'Notifications',
                                route: 'root.convenience-more_notifications',
                            },
                            {
                                name: 'samsung-pay',
                                title: 'Samsung Pay',
                                route: 'root.convenience-more_samsung-pay',
                                disabled: true,
                            },
                            {
                                name: 'additional-features',
                                title: 'Additional Features',
                                route: 'root.convenience-more_additional-features',
                            },
                            {
                                name: 'accessories',
                                title: 'Accessories',
                                description: 'Gear S2 provides a range of watch faces and watchbands that completes your personal style.\n\nThere are unique and colorful bands, including exclusive collection from Italian designer Alessandro Mendini, that brings his taste, humor, and sense of color to the Gear S2.',
                                route: 'root.convenience-more_accessories',
                            },
                        ],
                    },
                    {
                        name: 'customize-your-gear',
                        title: 'Customize your Gear S2',
                        description: 'You can transform the look of your Gear S2 by choosing from a wide variety of watch face and band options.\n\nTry on different designs, just like you mix and match your outfits everyday.',
                        route: 'root.customize-your-gear',
                    },
                ],
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
                if(sections == undefined) sections = this.content.sections;
                for(var s in sections) {
                    var section = sections[s];
                    if(section.name === name) {
                        return section;
                    }
                    if(section.sections) {
                        subsection = self.getSectionByName(name,section.sections);
                        if(subsection !== false) {
                            return subsection;
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
