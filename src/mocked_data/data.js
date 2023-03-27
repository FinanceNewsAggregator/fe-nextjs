
const newsData = [
  {
    id: 1,
    headline: "Apple announces new iPhone 14 series",
    bulletPoints: [
      "New A16 chip delivers faster performance",
      "Improved battery life and camera capabilities",
      "Available in four different models",
    ],
  },
  {
    id: 2,
    headline: "Tesla unveils electric semi-truck",
    bulletPoints: [
      "Range of up to 500 miles on a single charge",
      "Enhanced Autopilot features for highway driving",
      "Production starting in 2023",
    ],
  },
  {
    id: 3,
    headline: "Microsoft acquires AI startup DeepLearn",
    bulletPoints: [
      "DeepLearn specializes in deep learning algorithms",
      "Acquisition expected to enhance Azure AI capabilities",
      "Deal valued at $500 million",
    ],
  },
  {
    id: 4,
    headline: "Google releases Android 14 with new privacy features",
    bulletPoints: [
      "App hibernation to save battery life and storage",
      "Improved permission handling and user control",
      "New design language called Material NEXT",
    ],
  },
  {
    id: 5,
    headline: "Amazon launches new Alexa-powered smart home devices",
    bulletPoints: [
      "Expanded range includes smart speakers, displays, and cameras",
      "Improved voice recognition and natural language processing",
      "Integration with third-party services and platforms",
    ],
  },
];

export default newsData;


// const summarizeArticle = require('../open_ai/summarizeArticle');

// async function generateSummary(content) {
//   const summary = await summarizeArticle(content);
//   return summary;
// }

// const newsData = [
//   {
//     "status": "success",
//     "totalResults": 3245,
//     "results": [
//       {
//         "title": "McDonalds feiert chinesisches Neujahr im Metaverse",
//         "link": "https://www.btcecho.de/schlagzeilen/mcdonaldschinesischesneujahrmetaverse134292/",
//         "keywords": [
//           "Metaverse",
//           "China",
//           "Kunst",
//           "NFT"
//         ],
//         "creator": [
//           "Marlen Kremer"
//         ],
//         "video_url": null,
//         "description": "Der USamerikanische FastFoodGigant McDonalds macht Anstalten, im Metaverse aktiv zu werden. Pünktlich zum chinesischen Neujahr meldet sich das Restaurant mit einem VRErlebnis, bei dem es jedoch nicht um Burger und Pommes geht.   Source: BTCECHO Der Beitrag McDonalds feiert chinesisches Neujahr im Metaverse erschien zuerst auf BTCECHO.",
//         "content": null,
//         "pubDate": "20220203 13:30:44",
//         "expire_at": "Fri, 12 Aug 2022 13:30:44 GMT",
//         "image_url": "https://www.btcecho.de/wpcontent/uploads/2022/02/shutterstock_2114506427scaled.jpg",
//         "source_id": "btcecho",
//         "country": [
//           "germany"
//         ],
//         "category": [
//           "top",
//           "business"
//         ],
//         "language": "german"
//       },
//       {
//         "title": "With record $10.7 billion sales, Qualcomm eyes IoT, Metaverse space",
//         "link": "https://www.businessstandard.com/article/international/withrecord107billionsalesqualcommeyesiotmetaversespace122020301228_1.html",
//         "keywords": null,
//         "creator": null,
//         "video_url": null,
//         "description": "Riding on strong performance in its chipset and licensing business, chipmaker Qualcomm has reported a record revenue of $10.7 billion in its December quarter of 2021.",
//         "content": null,
//         "pubDate": "20220203 12:52:38",
//         "expire_at": "Fri, 12 Aug 2022 12:52:38 GMT",
//         "image_url": null,
//         "source_id": "businessstandard",
//         "country": [
//           "india"
//         ],
//         "category": [
//           "top"
//         ],
//         "language": "english"
//       },
//       {
//         "title": "Tech Leaders Are Jumping Into The Metaverse — Should Your Company Follow?",
//         "link": "https://www.forbes.com/sites/forbestechcouncil/2022/02/03/techleadersarejumpingintothemetaverseshouldyourcompanyfollow/",
//         "keywords": [
//           "Innovation",
//           "/innovation",
//           "Innovation",
//           "/innovation",
//           "technology"
//         ],
//         "creator": [
//           "Oleg Fonarov",
//           " Forbes Councils Member"
//         ],
//         "video_url": null,
//         "description": "So what are the upsides of jumping into the metaverse, and what are the challenges? We explore these questions below.",
//         "content": "So what are the upsides of jumping into the metaverse, and what are the challenges? We explore these questions below.",
//         "pubDate": "20220203 12:45:00",
//         "expire_at": "Fri, 12 Aug 2022 12:45:00 GMT",
//         "image_url": "https://thumbor.forbes.com/thumbor/fitin/0x0/filters%3Aformat%28jpg%29/https://specialsimages.forbesimg.com/imageserve/61fa8777b04ba54a788590a6/0x0.jpg",
//         "source_id": "forbes",
//         "country": [
//           "united states of america"
//         ],
//         "category": [
//           "technology"
//         ],
//         "language": "english"
//       },
//       {
//         "title": "Cryptocurrencies take a beating along with tech stocks, as Facebook earnings hit metaverse tokens and a blockchain hack hits solana and other DeFi coins",
//         "link": "https://markets.businessinsider.com/news/currencies/cryptomarketfacebookearningsmetaverseblockchainethereumbitcoinsolanahack20222",
//         "keywords": null,
//         "creator": null,
//         "video_url": null,
//         "description": "Meta's shares plunged 20% in premarket trading, dragging tech and social media stocks lower, while metaverselinked cryptos slid.",
//         "content": null,
//         "pubDate": "20220203 12:11:29",
//         "expire_at": "Fri, 12 Aug 2022 12:11:29 GMT",
//         "image_url": "https://i.insider.com/61e8b0c79386c900185f7145?format=jpeg",
//         "source_id": "businessinsider_us",
//         "country": [
//           "united states of america"
//         ],
//         "category": [
//           "top"
//         ],
//         "language": "english"
//       },
//       {
//         "title": "Facebook's transition to metaverse has eaten into the social media giant's profits",
//         "link": "https://www.npr.org/2022/02/03/1077820355/facebookstransitiontometaversehaseatenintothesocialmediagiantsprofits",
//         "keywords": null,
//         "creator": [
//           "Peter Granitz"
//         ],
//         "video_url": null,
//         "description": "Shares dropped more than 20% in after hours trading on news of slowing growth, competition and heavy spending on hardware.",
//         "content": "Shares dropped more than 20% in after hours trading on news of slowing growth, competition and heavy spending on hardware.(Image credit: Chris Delmas /AFP via Getty Images)",
//         "pubDate": "20220203 11:49:08",
//         "expire_at": "Fri, 12 Aug 2022 11:49:08 GMT",
//         "image_url": null,
//         "source_id": "npr",
//         "country": [
//           "united states of america"
//         ],
//         "category": [
//           "technology"
//         ],
//         "language": "english"
//       },
//       {
//         "title": "Powerbridge Technologies Enters into Metaverse to Create a New Model of Smart and Immersive Travel &amp; Leisure",
//         "link": "https://www.prnewswire.com:443/newsreleases/powerbridgetechnologiesentersintometaversetocreateanewmodelofsmartandimmersivetravelleisure301474782.html",
//         "keywords": [
//           "Computer & Electronics",
//           "Computer Software",
//           "Cloud Computing/Internet of Things",
//           "STW",
//           "CPR",
//           "IOT"
//         ],
//         "creator": null,
//         "video_url": null,
//         "description": "ZHUHAI, China, Feb. 3, 2022 /PRNewswire/  Powerbridge Technologies Co., Ltd. (Nasdaq: PBTS) (\"Powerbridge\" or the \"Company\"), a provider of multiindustry technology solutions, is pleased to announce its partnership between its whollyowned subsidiary, Powermeta Digital Co., Ltd....",
//         "content": null,
//         "pubDate": "20220203 11:47:00",
//         "expire_at": "Fri, 12 Aug 2022 11:47:00 GMT",
//         "image_url": null,
//         "source_id": "cision",
//         "country": [
//           "singapore"
//         ],
//         "category": [
//           "top"
//         ],
//         "language": "english"
//       },
//       {
//         "title": "5 Charts That Show Roblox's Metaverse Success Is Very Real",
//         "link": "https://www.fool.com/investing/2022/02/03/3chartsrobloxmetaversesuccessisveryreal/?source=iedfolrf0000001",
//         "keywords": null,
//         "creator": [
//           "newsfeedback@fool.com (Jason Hawthorne)"
//         ],
//         "video_url": null,
//         "description": "The company is on the road to profits as its virtual world keeps growing in popularity.",
//         "content": "There is a lot of talk these days about the metaverse  a term that has been defined in several ways. In general, though, it references a persistent digital space where users can be immersed in a virtual or augmented reality. And although the idea may be new to investors, one company has a huge head start on building part of the metaverse.Roblox (NYSE: RBLX) has been offering a platform that brings millions of people together in a virtual space since its founding in 2004. The platform is different from many others because it is free to play, and relies on games created by a community of developers, as well as purchases of Robux, its platformspecific virtual currency. The company has put up impressive financial results since its March 2021 initial public offering. But there are operational metrics that highlight just how strong a position the company is in.Image source: Getty Images.Continue reading",
//         "pubDate": "20220203 11:33:00",
//         "expire_at": "Fri, 12 Aug 2022 11:33:00 GMT",
//         "image_url": null,
//         "source_id": "fool",
//         "country": [
//           "canada"
//         ],
//         "category": [
//           "business"
//         ],
//         "language": "english"
//       },
//       {
//         "title": "1 Top Metaverse Stock to Buy Now and Hold",
//         "link": "https://www.fool.com/investing/2022/02/03/1topmetaversestocktobuynowandhold/?source=iedfolrf0000001",
//         "keywords": null,
//         "creator": [
//           "newsfeedback@fool.com (Trevor Jennewine and Jamie Louko)"
//         ],
//         "video_url": null,
//         "description": "Matterport could help you cash in on this multitrillion industry.",
//         "content": "The metaverse is still an evolving and nebulous technology, and we are probably several years away from seeing it in action. Even so, the basic concept is straightforward: The metaverse will be a virtual world (or a network of virtual worlds) in which people can interact with each other and their environment. And Matterport's (NASDAQ: MTTR) 3D capture technology could play an important role in constructing those worlds.In this Backstage Pass clip, recorded on Jan. 11, Motley Fool contributor Jamie Louko shares his thoughts on why Matterport could be a great way to invest in the metaverse, an industry that some analysts peg at over $1 trillion a decade from now.Continue reading",
//         "pubDate": "20220203 11:18:00",
//         "expire_at": "Fri, 12 Aug 2022 11:18:00 GMT",
//         "image_url": null,
//         "source_id": "fool",
//         "country": [
//           "canada"
//         ],
//         "category": [
//           "business"
//         ],
//         "language": "english"
//       },
//       {
//         "title": "Facebooks \"Metaverse\": Der Eskapismus im Kulturwandel",
//         "link": "https://www.derstandard.de/story/2000133056250/facebooksmetaversedereskapismusimkulturwandel?ref=rss",
//         "keywords": [
//           "Kultur"
//         ],
//         "creator": null,
//         "video_url": null,
//         "description": "Die VirtualRealityWelt \"Metaverse\" orientiert sich an Vorbildern aus der ScienceFictionLiteratur und schreibt die eskapistische Kulturtradition fort. Kann das gut gehen?",
//         "content": null,
//         "pubDate": "20220203 11:00:01",
//         "expire_at": "Fri, 12 Aug 2022 11:00:01 GMT",
//         "image_url": "https://i.ds.at/hXdQJw/rs:fill:150:0/plain/2022/02/02/212747FA0A74454BAC36552C92CC4981.jpg",
//         "source_id": "derstandard",
//         "country": [
//           "germany"
//         ],
//         "category": [
//           "entertainment"
//         ],
//         "language": "german"
//       },
//       {
//         "title": "Facebooks \"Metaverse\": Der Eskapismus im Kulturwandel",
//         "link": "https://www.derstandard.at/story/2000133056250/facebooksmetaversedereskapismusimkulturwandel?ref=rss",
//         "keywords": [
//           "Kultur",
//           "Debatte"
//         ],
//         "creator": null,
//         "video_url": null,
//         "description": "Die VirtualRealityWelt \"Metaverse\" orientiert sich an Vorbildern aus der ScienceFictionLiteratur und schreibt die eskapistische Kulturtradition fort. Kann das gut gehen?",
//         "content": null,
//         "pubDate": "20220203 11:00:01",
//         "expire_at": "Fri, 12 Aug 2022 11:00:01 GMT",
//         "image_url": "https://i.ds.at/hXdQJw/rs:fill:150:0/plain/2022/02/02/212747FA0A74454BAC36552C92CC4981.jpg",
//         "source_id": "derstandard_at",
//         "country": [
//           "austria"
//         ],
//         "category": [
//           "entertainment"
//         ],
//         "language": "german"
//       }
//     ],
//     "nextPage": "XXXPPPXXXXXXXXXX"
//   }
// ];

// async function getNewsData() {
//   for (let i = 0; i < newsData.results.length; i++) {
//     if (newsData.results[i].content !== null) {
//       newsData.results[i].summary = await generateSummary(newsData.results[i].content);
//     } else {
//       newsData.results[i].summary = "No summary available."; // Set a default summary if content is null
//     }
//   }
//   return newsData.results;
// }


// module.exports = getNewsData;
