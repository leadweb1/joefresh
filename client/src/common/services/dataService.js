(function () {
    'use strict';

    function dataService() {
        return {
            get: function () {
                return {
                    content: {
                        sections: [
                            {
                                name: 'aesthetic-elegant-design',
                                title: 'Aesthetic and Elegant Design',
                                route: 'root.aesthetic-elegant-design',
                                sections: [
                                    {
                                        name: 'stylish-smart-gear',
                                        title: 'Stylish Smart Gear',
                                        route: 'root.aesthetic-elegant-design.stylish-smart-gear',
                                    }
                                ]
                            },
                            {
                                name: 'intuitive-experience',
                                title: 'Intuitive Experience',
                                route: 'root.intuitive-experience',
                                sections: [
                                    {
                                        name: 'rotating-bezel',
                                        title: 'Rotating Bezel',
                                        route: 'root.intuitive-experience.rotating-bezel',
                                    }
                                ]
                            },
                            {
                                name: 'healthier-lifestyle',
                                title: 'Healthier Lifestyle',
                                route: 'root.healthier-lifestyle',
                                sections: [
                                    {
                                        name: 'track-your-health',
                                        title: 'Track Your Health',
                                        route: 'root.healthier-lifestyle.track-your-health',
                                    },
                                    {
                                        name: '24h-activity-log',
                                        title: '24H Activity Log',
                                        route: 'root.healthier-lifestyle.24h-activity-log',
                                    },
                                    {
                                        name: 'health-clock',
                                        title: 'Health Clock',
                                        route: 'root.healthier-lifestyle.health-clock',
                                    }
                                ]
                            },
                            {
                                name: 'convenience-more',
                                title: 'Convenience & More',
                                route: 'root.convenience-more',
                                sections: [
                                    {
                                        name: 'notifications',
                                        title: 'Notifications',
                                        route: 'root.convenience-more.notifications',
                                    },
                                    {
                                        name: 'samsung-pay',
                                        title: 'Samsung Pay',
                                        route: 'root.convenience-more.samsung-pay',
                                    },
                                    {
                                        name: 'additional-features',
                                        title: 'Additional Features',
                                        route: 'root.convenience-more.additional-features',
                                    },
                                    {
                                        name: 'accessories',
                                        title: 'Accessories',
                                        route: 'root.convenience-more.accessories',
                                    }
                                ]
                            }
                        ]
                    },
                };
            }
        };
    }

    angular.module('common.services.data', [])
            .factory('DataService', dataService);
})();
