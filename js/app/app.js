/**
 * Created by Andres on 6/1/2017.
 */

(function () {
   "use strict";
    angular.module("myApp", ["ui.router"])
        .config(
            [
                "$stateProvider" ,
                "$urlRouterProvider",
                function ($stateProvider, $urlRouterProvider) {
                    $urlRouterProvider.otherwise('/');

                    $stateProvider
                        .state('signature', {
                            url:'/signature',
                            templateUrl: 'views/home.html',
                            controller: 'HomeCtrl as vm'
                        })
                        .state('overview', {
                            url:'/',
                            templateUrl: 'views/overview.html',
                        })
                        .state('statements', {
                            url:'/statements',
                            templateUrl: 'views/statements.html',
                        })
                        .state('turnCardOff', {
                            url:'/turnCardOff',
                            templateUrl: 'views/TurnCardOff.html'
                        })
                        .state('yearEndSummary', {
                            url:'/yearEndSummary',
                            templateUrl: 'views/yearEndSummary.html',
                        })
                        .state('getANewCard', {
                            url:'/getANewCard',
                            templateUrl: 'views/getANewCard.html'
                        })
                        .state('redeemToCard', {
                            url:'/redeemToCard',
                            templateUrl: 'views/redeemToCard.html'
                        })
                        .state('redeemConfirm', {
                            url:'/redeemConfirm',
                            templateUrl: 'views/redeemConfirm.html'
                        })
                        .state('redeemYourReward', {
                            url:'/redeemYourReward',
                            templateUrl: 'views/redeemYourReward.html'
                        })
                        .state('understandYourReward', {
                            abstract: true,
                            url:'/understandYourReward',
                            templateUrl: 'views/understandYourReward.html'

                        })
                        .state('understandYourReward.cashBack15', {
                            url:'/cashBack15',
                            templateUrl: 'views/cashBack15.html'
                        })
                        .state('understandYourReward.Bonus10', {
                            url:'/Bonus10',
                            templateUrl: 'views/Bonus10.html'
                        })
                        .state('understandYourReward.CalculateCashBack', {
                            url:'/CalculateCashBack',
                            templateUrl: 'views/CalculateCashBack.html'
                        })
                }
            ]
        )
        .controller('HomeCtrl', [HomeCtrl])
        .controller('NavCtrl', [NavCtrl])
        .controller('CardPanelCtrl', [CardPanelCtrl])
        .directive('cardPanel', function() {
            return {
                restrict: 'E',
                templateUrl: 'views/card-panel-views/cardPanelView.html'
            }
        })
        .directive('currentBal', function() {
            return {
                restrict: 'AEC',
                templateUrl: 'views/card-panel-views/components/currentBal.html'
            }
        })
        .directive('recentTrans', function() {
            return {
                restrict: 'AEC',
                templateUrl: 'views/card-panel-views/components/recentTrans.html'
            }
        })
        .directive('recentCash', function() {
            return {
                restrict: 'AEC',
                templateUrl: 'views/card-panel-views/components/recentCash.html'
            }
        })
        .directive('accountDetails', function() {
            return {
                restrict: 'AEC',
                templateUrl: 'views/accountDetails.html'
            }
        })
        .directive('accountIcon', function(){

            function btnFunction(element) {
                element.bind('click', function () {
                    document.getElementById("myDropdown").classList.toggle("show");
                })
            }

            return{
                restrict: 'AEC',
                template: "<a id='account-icon'><i class='fa fa-info-circle fa-lg alert-success dropbtn'></i> </a>",
                link: function(scope, element, attrs){
                    btnFunction(element);
                    onClickAction();
                }
            }
        })
        .directive('accountDetailsContent', function(){
            return{
                restrict: 'AEC',
                templateUrl:'views/accountDetailsContent.html'
            }
        })

    function HomeCtrl() {
        var vm = this;
        var person = {
            "firstName" :"John",
            "lastName" : "Smith",
            "percent" : "1.5%"
        };
        var personText = "Hello " + person.firstName + "!";

        vm.home ={
            "card":[
                {"text" : personText},
                {"text" : "Signature Visa Card"}
            ],
            "person" : person,
            "selfService": {
                "title" : "Self Service Shortcuts"
            },
            "shortcuts" : [
                {
                    "text": "Turn Off Account",
                    "link": "#"
                },
                {
                    "text": "Turn Off Account",
                    "link": "#"
                },
                {
                    "text": "Turn Off Account",
                    "link": "#"
                },
                {
                    "text": "Turn Off Account",
                    "link": "#"
                }
            ],
            "accountDetails" : {
                "acctNumber" : "1234",
            }
        };
    }

    function NavCtrl() {
        var vm = this;

        vm.menu = {
            "menu":[
                {
                    "name": "Activity",
                    "link":"#"
                },
                {
                    "name": "Payments",
                    "link":"#"
                },
                {
                    "name": "Cash Back Rewards",
                    "link":"#"
                },
                {
                    "name": "Self Service",
                    "link":"#"
                }
            ],
            "logo": {
                "link": "/images/logo.gif",
                "alt": "State Department Federal Credit Union"
            },
            "account":[
                {
                    "icon":"fa fa-user",
                    "title":"Profile Settings",
                    "link":"#"
                },
                {
                    "icon":"fa fa-search",
                    "title":"Search",
                    "link":"#"
                },
                {
                    "icon":"fa fa-envelope",
                    "title":"Messages",
                    "link":"#"
                }
            ],
            "log": "log out"
        }

    }

    function CardPanelCtrl() {
        var vm = this;

        vm.components = {
            "dirs": [
                {
                    "id": "current-bal",
                    "title": "Current Card Balance",
                    "amount" : "2345",
                    "credTotal" : "10000",
                    "credAvail" : "7655",
                    "credSpent" : "2210.35",
                    "lastSpentDate" : "5/1/2017",
                    "dueDate" : "6/1/2017",
                    "buttonTitle":"Make a Payment",
                    "bodyHeaders": [
                        "Current Credit Available",
                        "Last Statement Available",
                        "Next Payment Due"
                    ]
                },
                {
                    "id": "recent-trans",
                    "title": "Recent Transaction",
                    "amount" : "147.72",
                    "buttonTitle":"Recent Transactions",
                    "trans" : [
                        {
                            "date" : "5/5/2016",
                            "merchant" : "Shell",
                            "amount" : "500"
                        },
                        {
                            "date" : "5/5/2016",
                            "merchant" : "Shell",
                            "amount" : "500"
                        },
                        {
                            "date" : "5/5/2016",
                            "merchant" : "Shell",
                            "amount" : "500"
                        },
                        {
                            "date" : "5/5/2016",
                            "merchant" : "Shell",
                            "amount" : "500"
                        }
                    ],
                    "transTotal" : "147.42"

                },
                {
                    "id": "recent-cash",
                    "title": "Recent Cash Balance",
                    "amount" : "72.42",
                    "buttonTitle":"Redeem Now"

                }
            ]
        }

        vm.payCurrentBal = function () {
            alert("Pay Up!");
        }


    }

    function onClickAction() {
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
                console.log('you clicked something');
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
    }
}());