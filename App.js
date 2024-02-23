import React from "react";
import ReactDOM from "react-dom/client";

/* Food App

header
    logo
    nav-items
    cart

body
    searchbar
    RESTRAUNT LIST
        RESTRAUNT CARD
            IMAGE
            NAME
            RATING 
            CAUSINS


footer
    links
    copyrights
*/
const Header=()=>(
    <div className="header">
  <Logo />
  <ul className="nav-items">
    <li>Home</li>
    <li>About</li>
    <li>Contact us</li>
    <li>Cart</li>
  </ul>
  </div>
    
)
const Logo = () => (
  //for reloading by on click on logo
  <a href="/">  
<img alt="logo image" src="https://i.pinimg.com/280x280_RS/fb/ec/76/fbec767fbb03224f1f4aabde0197a273.jpg" width={"100px"} height={"80px"}/>
  </a>
)
const Body= ()=>{
  return(
    <div className="cards">
      {/* const arr1 = [1, 2, 3];
      const arr2 = [...arr1];  this is spred operator */}

      {RestrauntList.map((resturant)=>{
        return <ResturantCard{...resturant.info} key={resturant.info.id}/>;
      })}

    {/* <ResturantCard {...RestrauntList[0].info}/>
    <ResturantCard {...RestrauntList[1].info}/>
    <ResturantCard {...RestrauntList[2].info}/>
    <ResturantCard {...RestrauntList[3].info}/>
    <ResturantCard {...RestrauntList[4].info}/>
    <ResturantCard {...RestrauntList[5].info}/>
    <ResturantCard {...RestrauntList[6].info}/>
    <ResturantCard {...RestrauntList[7].info}/>
    <ResturantCard {...RestrauntList[8].info}/>
    */}
    </div>
    
  )
}
// const kfc={
//   // Name:"KFC",
//   // image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4",
//   // rating:"4.3 stars",
//   // causins:["American","Australian"].join(", ")



// }

const RestrauntList=
   [
    {
      "info": {
        "id": "554643",
        "name": "Third Wave Coffee",
        "cloudinaryImageId": "d96267738c19ec62acb5390e52faba41",
        "locality": "Connaught Place",
        "areaName": "Connaught Place",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Beverages",
          "Pizzas"
        ],
        "avgRating": 4.5,
        "parentId": "274773",
        "avgRatingString": "4.5",
        "totalRatingsString": "1K+",
        "promoted": true,
        "adTrackingId": "cid=11388066~p=1~eid=0000018d-c9b9-f299-005d-112300bb016c~srvts=1708486423193~45995",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 4.5,
          "serviceability": "SERVICEABLE",
          "slaString": "30 mins",
          "lastMileTravelString": "4.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-02-22 01:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=554643",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "817657",
        "name": "Sita Ram Diwan Chand",
        "cloudinaryImageId": "a577d38bbddeec3521692c2c63a4b3e9",
        "locality": "Preet Vihar",
        "areaName": "Shakarpur",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Indian"
        ],
        "avgRating": 4.2,
        "parentId": "496926",
        "avgRatingString": "4.2",
        "totalRatingsString": "50+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 7.3,
          "serviceability": "SERVICEABLE",
          "slaString": "32 mins",
          "lastMileTravelString": "7.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-02-21 16:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=817657",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "731744",
        "name": "Southy Cafe",
        "cloudinaryImageId": "8febdcc128f3e7be17cdf6700dcfc51b",
        "locality": "Chankya Puri",
        "areaName": " Bengali market, Connaught Place",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "South Indian"
        ],
        "avgRating": 4,
        "veg": true,
        "parentId": "471129",
        "avgRatingString": "4.0",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 4.9,
          "serviceability": "SERVICEABLE",
          "slaString": "29 mins",
          "lastMileTravelString": "4.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-02-21 22:50:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=731744",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "330141",
        "name": "Love Poori Wala",
        "cloudinaryImageId": "ccspmmtwsj5gmeoxsicn",
        "locality": "Lala Jagan Nath Marg",
        "areaName": "Kamla Nagar",
        "costForTwo": "₹100 for two",
        "cuisines": [
          "North Indian",
          "Snacks",
          "Desserts"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "13819",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 4.2,
          "serviceability": "SERVICEABLE",
          "slaString": "26 mins",
          "lastMileTravelString": "4.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-02-21 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=330141",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "617971",
        "name": "Smoor",
        "cloudinaryImageId": "82443d6e0bf5442d42e40ee3c35e6297",
        "locality": "Vikas Marg",
        "areaName": "Laxmi Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Desserts",
          "Bakery"
        ],
        "avgRating": 4.5,
        "parentId": "3506",
        "avgRatingString": "4.5",
        "totalRatingsString": "100+",
        "promoted": true,
        "adTrackingId": "cid=11331911~p=4~eid=0000018d-c9b9-f299-005d-112600bb047d~srvts=1708486423193~45995",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 7.5,
          "serviceability": "SERVICEABLE",
          "slaString": "33 mins",
          "lastMileTravelString": "7.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-02-22 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "description": "",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹699",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=617971",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "675567",
        "name": "Juggernaut",
        "cloudinaryImageId": "1561318fb636d378666d71f4ef534272",
        "locality": "Barakhamba Road",
        "areaName": "Connaught Place",
        "costForTwo": "₹1200 for two",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Fast Food",
          "Beverages",
          "Desserts",
          "Street Food"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "111778",
        "avgRatingString": "4.2",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 3.9,
          "serviceability": "SERVICEABLE",
          "slaString": "28 mins",
          "lastMileTravelString": "3.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-02-22 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=675567",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "45622",
        "name": "Gopal Sweets Corner (Kamla Nagar)",
        "cloudinaryImageId": "ms0fyojyvisrduycbnby",
        "locality": "Kamla Nagar",
        "areaName": "Kamla Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Sweets",
          "Snacks",
          "Street Food",
          "Indian"
        ],
        "avgRating": 4.3,
        "parentId": "89062",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 5.7,
          "serviceability": "SERVICEABLE",
          "slaString": "26 mins",
          "lastMileTravelString": "5.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-02-21 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=45622",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "44972",
        "name": "Om di Hatti(Kamla Nagar)",
        "cloudinaryImageId": "ypoamjz9lkaxlsf6075j",
        "locality": "Shakti Nagar",
        "areaName": "Kamla Nagar",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "North Indian",
          "Fast Food",
          "Snacks"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "22243",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 5.8,
          "serviceability": "SERVICEABLE",
          "slaString": "30 mins",
          "lastMileTravelString": "5.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-02-21 20:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=44972",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "685167",
        "name": "IGP Cakes",
        "cloudinaryImageId": "cc84d172c8acb034e61ffaeb2d2557e3",
        "locality": "Krishna Nagar",
        "areaName": "Laxmi Nagar",
        "costForTwo": "₹299 for two",
        "cuisines": [
          "Desserts",
          "Bakery"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "392350",
        "avgRatingString": "4.2",
        "totalRatingsString": "100+",
        "promoted": true,
        "adTrackingId": "cid=11320986~p=6~eid=0000018d-c9b9-f299-005d-112800bb0641~srvts=1708486423193~45995",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 6.8,
          "serviceability": "SERVICEABLE",
          "slaString": "35 mins",
          "lastMileTravelString": "6.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-02-21 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹999",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=685167",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "286267",
        "name": "Shri Ganesh Corner",
        "cloudinaryImageId": "zkcm8egwlvputbqccohs",
        "locality": "Shakarpur",
        "areaName": "Shakarpur",
        "costForTwo": "₹100 for two",
        "cuisines": [
          "Snacks"
        ],
        "avgRating": 4.3,
        "parentId": "186384",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 7.5,
          "serviceability": "SERVICEABLE",
          "slaString": "34 mins",
          "lastMileTravelString": "7.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-02-21 21:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=286267",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    }
  ]



const ResturantCard=({name,cuisines,avgRating,cloudinaryImageId})=>{
  
  //console.log(props);
  return(
    <div className="card"> 

    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
    {/* <h2>{propertiess.info?.name}</h2>
    <h3>{propertiess.info?.cuisines}</h3>
    <h3>{propertiess.info?.avgRating}</h3> */}
    <h2>{name}</h2>
    <h3>{cuisines}</h3>
    <h3>{avgRating}</h3>

  </div>

  )
  
  
}

const Footer=()=>{
  return(
    <h4>Footer</h4>
  )
}
const Foodapp = () => {
  return(<> <Header/>
    <Body/>
    <Footer/></>
   
   )
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Foodapp />);
