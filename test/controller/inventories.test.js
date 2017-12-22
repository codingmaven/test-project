const chai = require('chai');
const supertest = require('supertest-as-promised');
const _ = require('lodash');
const app = require('../../app/app');
const Inventory = require('../../app/models/inventory.model');
const expect = chai.expect;
const request = supertest(app);

describe('Inventories Controller', function () {
  before(async () => {
    await Inventory.create([
      {
        "id": "AC3C9882-5F02-6F69-972F-842BD1A7162D",
        "title": "pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris",
        "owner": "Ignatius Whitley",
        "price": 1593850,
        "address": "Ap #749-3207 Et Ave",
        "city": "Monte San Savino",
        "country": "Gambia",
        "created": "2017-06-02T07:42:46-07:00"
      },
      {
        "id": "A43B24EE-534B-0848-AF25-161380DC1638",
        "title": "in faucibus orci luctus et ultrices posuere cubilia Curae; Donec tincidunt. Donec vitae erat vel pede",
        "owner": "Gray Olsen",
        "price": 1012945,
        "address": "P.O. Box 418, 6559 Pharetra. St.",
        "city": "Shepparton",
        "country": "Mozambique",
        "created": "2015-03-21T21:49:02-07:00"
      },
      {
        "id": "C766AADC-93A3-54B8-4CEE-E4847B8E8DE0",
        "title": "ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas",
        "owner": "Ali James",
        "price": 1764776,
        "address": "Ap #737-9965 Sit Rd.",
        "city": "Berlin",
        "country": "Lebanon",
        "created": "2015-09-30T12:33:44-07:00"
      },
      {
        "id": "359F47D1-0F8C-EFE6-1F36-BC68956F879B",
        "title": "metus sit amet ante. Vivamus non lorem vitae odio sagittis semper.",
        "owner": "Magee Barr",
        "price": 690741,
        "address": "Ap #639-8885 Justo Ave",
        "city": "Auburn",
        "country": "Malta",
        "created": "2015-01-30T19:38:07-08:00"
      },
      {
        "id": "39D754A2-5739-1F2B-89C0-591B9D46E303",
        "title": "egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed",
        "owner": "Graiden Weiss",
        "price": 1212803,
        "address": "P.O. Box 541, 5874 Dignissim Rd.",
        "city": "San Bernardo",
        "country": "Denmark",
        "created": "2016-09-26T21:41:46-07:00"
      },
      {
        "id": "FDCF2F17-BFBD-0935-A8D5-6A9EAED74743",
        "title": "ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a,",
        "owner": "Chaim Bruce",
        "price": 1505762,
        "address": "5457 Phasellus Rd.",
        "city": "Tampa",
        "country": "Antigua and Barbuda",
        "created": "2016-08-14T11:03:56-07:00"
      },
      {
        "id": "5BD3D22B-AD64-5847-957F-3C6FE31FDA1E",
        "title": "felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu,",
        "owner": "Nathan Russell",
        "price": 1766814,
        "address": "987-8916 Metus. St.",
        "city": "King's Lynn",
        "country": "Korea, South",
        "created": "2014-12-15T04:28:18-08:00"
      },
      {
        "id": "DF27E8CA-3C64-0DDA-54E0-BC1CCFB85485",
        "title": "ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum.",
        "owner": "Tyrone Mccray",
        "price": 480249,
        "address": "Ap #397-1138 Elit, Road",
        "city": "Ludvika",
        "country": "Turkmenistan",
        "created": "2016-05-04T05:53:19-07:00"
      },
      {
        "id": "C029B5CB-934C-619B-2593-BDB0A972EF89",
        "title": "tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus",
        "owner": "Burton Cobb",
        "price": 1619738,
        "address": "2230 Nisl. Road",
        "city": "Frignano",
        "country": "Bermuda",
        "created": "2016-08-07T08:12:53-07:00"
      },
      {
        "id": "4D2DBAA0-3649-523A-02F8-4EE3E5717DE4",
        "title": "nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu,",
        "owner": "David Vaughn",
        "price": 372977,
        "address": "P.O. Box 708, 9954 Velit Rd.",
        "city": "Kenosha",
        "country": "United Arab Emirates",
        "created": "2014-03-28T17:14:37-07:00"
      },
      {
        "id": "1D133C64-A00D-AA1A-3259-642C4C005343",
        "title": "porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae",
        "owner": "Moses Kent",
        "price": 1865073,
        "address": "P.O. Box 591, 7943 Ante. Rd.",
        "city": "Sauris",
        "country": "Kiribati",
        "created": "2017-10-28T19:02:06-07:00"
      },
      {
        "id": "95FAD223-2A1F-8A6C-B066-2BFC47F442AE",
        "title": "eleifend, nunc risus varius orci, in consequat enim diam vel",
        "owner": "Jelani Madden",
        "price": 489011,
        "address": "556-117 Arcu. Av.",
        "city": "Massa e Cozzile",
        "country": "Guinea-Bissau",
        "created": "2017-03-18T01:29:56-07:00"
      },
      {
        "id": "439E2C15-BEAE-6E79-A364-63EA1CF1DA17",
        "title": "at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio.",
        "owner": "Burke Compton",
        "price": 763272,
        "address": "817-6552 Nec Avenue",
        "city": "Toledo",
        "country": "Holy See (Vatican City State)",
        "created": "2014-11-04T21:55:39-08:00"
      },
      {
        "id": "1DA983AD-4A82-4195-C694-B7E5BF7CF71D",
        "title": "sed pede. Cum sociis natoque penatibus et magnis dis parturient montes,",
        "owner": "Louis Adams",
        "price": 757461,
        "address": "Ap #780-6954 Ut St.",
        "city": "Newtown",
        "country": "New Zealand",
        "created": "2015-07-12T23:25:11-07:00"
      },
      {
        "id": "692CFB5C-1609-65B4-2016-A8EA1831BB42",
        "title": "interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris",
        "owner": "Peter Underwood",
        "price": 208403,
        "address": "554-8917 In Road",
        "city": "Rezé",
        "country": "Bangladesh",
        "created": "2015-09-26T23:25:30-07:00"
      },
      {
        "id": "369E3B54-ACA6-C8E5-E45B-E85A683EA279",
        "title": "sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur",
        "owner": "Victor Wallace",
        "price": 1745422,
        "address": "Ap #284-1405 Quisque Av.",
        "city": "Borghetto di Vara",
        "country": "Fiji",
        "created": "2015-05-28T05:19:18-07:00"
      },
      {
        "id": "A9B0372E-66C0-0CC3-04AB-C8AF17361F49",
        "title": "mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa",
        "owner": "Berk Moreno",
        "price": 1779494,
        "address": "2198 Phasellus Road",
        "city": "Houtave",
        "country": "Philippines",
        "created": "2015-07-13T14:00:54-07:00"
      },
      {
        "id": "55C50F10-76FE-0DF1-30D3-F2D7607E736B",
        "title": "feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas",
        "owner": "Herrod Silva",
        "price": 1249010,
        "address": "P.O. Box 442, 7150 Mauris Av.",
        "city": "Almere",
        "country": "Belize",
        "created": "2014-06-05T08:59:56-07:00"
      },
      {
        "id": "7CB8BC67-EE9B-1491-6758-AE587A78C046",
        "title": "at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec tincidunt. Donec vitae",
        "owner": "Wang Guzman",
        "price": 1166265,
        "address": "4316 Proin Av.",
        "city": "Massemen",
        "country": "Uzbekistan",
        "created": "2014-12-15T22:01:03-08:00"
      },
      {
        "id": "3707F908-7D5C-2764-B71F-FF51B1D50FCA",
        "title": "non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient",
        "owner": "Hasad Curry",
        "price": 1429173,
        "address": "P.O. Box 342, 4856 Eros St.",
        "city": "Levin",
        "country": "Zambia",
        "created": "2015-11-04T08:32:15-08:00"
      },
      {
        "id": "4AF5F639-BC31-3F0A-364E-5AA13F5F9391",
        "title": "Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora",
        "owner": "Keane Paul",
        "price": 1445992,
        "address": "P.O. Box 812, 5826 Ut Rd.",
        "city": "Saltcoats",
        "country": "Gambia",
        "created": "2014-12-18T10:10:40-08:00"
      },
      {
        "id": "B1FC4320-01D9-532A-AD1B-0FDD76D42343",
        "title": "risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed",
        "owner": "Hasad Steele",
        "price": 1031826,
        "address": "P.O. Box 153, 4938 In Road",
        "city": "Laramie",
        "country": "French Guiana",
        "created": "2015-02-11T22:27:10-08:00"
      },
      {
        "id": "5309251E-0527-9AEE-7D65-F676D8CAC23A",
        "title": "Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel,",
        "owner": "Ralph Rice",
        "price": 878486,
        "address": "4337 Placerat, Av.",
        "city": "Onoz",
        "country": "Cayman Islands",
        "created": "2017-07-10T21:27:27-07:00"
      },
      {
        "id": "DB8D5BC4-F95F-A3E6-F1A8-823836B1B5A6",
        "title": "erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat",
        "owner": "Forrest Mack",
        "price": 1194562,
        "address": "740-7176 Feugiat Av.",
        "city": "Kenosha",
        "country": "India",
        "created": "2016-04-04T08:59:06-07:00"
      },
      {
        "id": "2AB34D67-136B-0C29-E315-B6CAF5292559",
        "title": "consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget,",
        "owner": "Fulton Lancaster",
        "price": 753504,
        "address": "3329 Nibh Rd.",
        "city": "Maser",
        "country": "France",
        "created": "2016-01-14T14:38:57-08:00"
      },
      {
        "id": "65E7CEB9-B6F5-12A4-8B48-9A11FB98B150",
        "title": "feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis",
        "owner": "Brock Armstrong",
        "price": 1645247,
        "address": "9301 Scelerisque Rd.",
        "city": "Calama",
        "country": "Eritrea",
        "created": "2016-05-01T02:17:50-07:00"
      },
      {
        "id": "9CA51797-92E7-116C-BC0B-A7479BD81212",
        "title": "Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor",
        "owner": "Elijah Hart",
        "price": 623668,
        "address": "949-4842 Nec Ave",
        "city": "Yellowknife",
        "country": "Greece",
        "created": "2017-09-25T05:12:36-07:00"
      },
      {
        "id": "26743364-C4B0-51E5-D327-89136E85C02F",
        "title": "Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis",
        "owner": "Keaton Randolph",
        "price": 1717111,
        "address": "P.O. Box 833, 5944 Odio. Ave",
        "city": "Baracaldo",
        "country": "Curaçao",
        "created": "2015-04-12T02:57:15-07:00"
      },
      {
        "id": "B9C16B0F-F256-C0B3-6013-05C0C11176D0",
        "title": "at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue",
        "owner": "Ferdinand Rodriquez",
        "price": 536669,
        "address": "129-8891 Ante St.",
        "city": "Wells",
        "country": "Tunisia",
        "created": "2017-03-31T14:05:47-07:00"
      },
      {
        "id": "1C41DBFE-54ED-C563-3A9A-BEAFE596A1E6",
        "title": "sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris",
        "owner": "Hayden Benjamin",
        "price": 216230,
        "address": "P.O. Box 690, 7509 Risus. Rd.",
        "city": "Chichester",
        "country": "Norfolk Island",
        "created": "2016-11-14T14:14:14-08:00"
      },
      {
        "id": "8E959434-CF4E-85EE-A4EB-4A1DE538E074",
        "title": "id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at,",
        "owner": "Keith Willis",
        "price": 672170,
        "address": "Ap #781-8837 Ut, Road",
        "city": "Brusson",
        "country": "Burkina Faso",
        "created": "2015-09-06T08:00:40-07:00"
      },
      {
        "id": "D129E5CF-1565-28D8-F7C5-CBBD57101E9C",
        "title": "molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad",
        "owner": "Ralph Briggs",
        "price": 1367008,
        "address": "Ap #622-2877 Aliquet, St.",
        "city": "Yeovil",
        "country": "Togo",
        "created": "2017-04-29T13:02:38-07:00"
      },
      {
        "id": "72358717-6741-9C76-DDDA-956716EBA345",
        "title": "egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus",
        "owner": "Jelani Reyes",
        "price": 1654835,
        "address": "1570 Felis, Ave",
        "city": "Cabildo",
        "country": "Mauritania",
        "created": "2016-11-18T16:59:44-08:00"
      },
      {
        "id": "659579E1-FCD0-62EA-9FAE-2C8765374035",
        "title": "mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi",
        "owner": "Axel Gutierrez",
        "price": 1144860,
        "address": "Ap #963-9711 Sit Avenue",
        "city": "Belmonte del Sannio",
        "country": "Saint Pierre and Miquelon",
        "created": "2015-08-26T02:25:02-07:00"
      },
      {
        "id": "24FE698A-BC75-0944-E455-F3A7ECFBB2C2",
        "title": "Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus",
        "owner": "Clayton Reilly",
        "price": 429552,
        "address": "827-7942 Proin Road",
        "city": "Soye",
        "country": "Spain",
        "created": "2014-03-31T21:47:15-07:00"
      },
      {
        "id": "219CB79B-BD62-D2EB-5DBE-E9B31794A005",
        "title": "Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper.",
        "owner": "Blake Silva",
        "price": 1017038,
        "address": "195-1380 Ac Av.",
        "city": "Sylvan Lake",
        "country": "Kazakhstan",
        "created": "2017-02-07T17:35:23-08:00"
      },
      {
        "id": "1A9763BD-221B-1D11-537A-26BDC8F16BE9",
        "title": "Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum",
        "owner": "Clayton Silva",
        "price": 1163032,
        "address": "P.O. Box 208, 8389 Sit Av.",
        "city": "Anchorage",
        "country": "Tuvalu",
        "created": "2016-06-19T16:00:08-07:00"
      },
      {
        "id": "C5547D5B-532C-F2A4-AB42-5B88FA54C83D",
        "title": "eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad",
        "owner": "Burke Mcdonald",
        "price": 1711681,
        "address": "Ap #751-8831 Mi. Av.",
        "city": "GomzŽ-Andoumont",
        "country": "Yemen",
        "created": "2017-01-14T07:01:31-08:00"
      },
      {
        "id": "7571C2A0-F4E3-513F-9249-CEFF00187B54",
        "title": "a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis",
        "owner": "David Carr",
        "price": 466525,
        "address": "548-1702 Non Avenue",
        "city": "Oyace",
        "country": "Portugal",
        "created": "2015-07-10T04:21:20-07:00"
      },
      {
        "id": "AA5871BC-3DD7-EE92-3442-ECDC8FABF74B",
        "title": "ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus",
        "owner": "Amery Ellis",
        "price": 827595,
        "address": "428-6468 Enim, Av.",
        "city": "Saint-GŽry",
        "country": "Korea, North",
        "created": "2016-12-03T06:23:46-08:00"
      },
      {
        "id": "CB5D46A4-72F6-4226-CF00-F1817ED880F1",
        "title": "erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus.",
        "owner": "Christopher Kane",
        "price": 1961209,
        "address": "155-4611 Id, Street",
        "city": "Oliver",
        "country": "Iraq",
        "created": "2014-08-06T21:16:38-07:00"
      },
      {
        "id": "D8A1618D-BFEF-D8C1-2522-C9C97E6F0592",
        "title": "et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo",
        "owner": "Dieter Christensen",
        "price": 1143230,
        "address": "8070 Lorem, Road",
        "city": "Caldarola",
        "country": "Peru",
        "created": "2017-04-25T18:40:17-07:00"
      },
      {
        "id": "F2B37459-9F6C-C89E-6F94-A71223481CC6",
        "title": "dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet posuere, enim",
        "owner": "Matthew Briggs",
        "price": 1620801,
        "address": "Ap #534-8570 Risus. Rd.",
        "city": "Dokkum",
        "country": "Sri Lanka",
        "created": "2015-10-07T17:43:06-07:00"
      },
      {
        "id": "A400818A-9D47-9FAF-EEAC-FF276266885D",
        "title": "mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus",
        "owner": "Hall Prince",
        "price": 1348755,
        "address": "1407 Mollis Avenue",
        "city": "Ettelgem",
        "country": "Indonesia",
        "created": "2016-09-30T02:43:42-07:00"
      },
      {
        "id": "297A89C7-AA59-FE95-8166-32AE286FBCD8",
        "title": "quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus.",
        "owner": "Macaulay Dunlap",
        "price": 465880,
        "address": "4407 Orci, Street",
        "city": "LimerlŽ",
        "country": "Guinea",
        "created": "2014-05-06T18:06:07-07:00"
      },
      {
        "id": "F2382FFF-3A9D-CF07-1CF6-0D17ECC2BF7E",
        "title": "mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare,",
        "owner": "Justin Quinn",
        "price": 946405,
        "address": "1766 Massa. Avenue",
        "city": "Saint John",
        "country": "Cook Islands",
        "created": "2015-02-05T01:07:03-08:00"
      },
      {
        "id": "1E2CA474-56B7-1ED9-7BD0-E403BC592FF1",
        "title": "orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis",
        "owner": "Castor Whitley",
        "price": 997691,
        "address": "Ap #324-8092 Senectus St.",
        "city": "Wrigley",
        "country": "Ecuador",
        "created": "2015-02-01T07:56:21-08:00"
      },
      {
        "id": "C34D7D29-D43A-EB3B-1538-8AA631968149",
        "title": "augue. Sed molestie. Sed id risus quis diam luctus lobortis.",
        "owner": "Griffin Woods",
        "price": 1385688,
        "address": "Ap #630-8087 Quis Rd.",
        "city": "Lenna",
        "country": "South Africa",
        "created": "2017-05-06T07:41:55-07:00"
      },
      {
        "id": "ED279863-F097-DBA4-AF19-7EB984FA0D89",
        "title": "at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend",
        "owner": "Jack Fleming",
        "price": 578238,
        "address": "517-9091 Neque. Avenue",
        "city": "Thisnes",
        "country": "Bangladesh",
        "created": "2017-05-08T18:11:29-07:00"
      },
      {
        "id": "B17A5BC8-6ADA-A486-7FF7-EF4FE0F6DC4F",
        "title": "erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus",
        "owner": "Dominic Rollins",
        "price": 1071996,
        "address": "638-5588 Aliquam Rd.",
        "city": "Parral",
        "country": "El Salvador",
        "created": "2014-01-02T18:31:14-08:00"
      },
      {
        "id": "F46E4E6C-C66B-DF55-246C-069FF1136806",
        "title": "tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque",
        "owner": "Acton West",
        "price": 963366,
        "address": "8350 Mi Road",
        "city": "Fermont",
        "country": "Bolivia",
        "created": "2014-11-08T15:37:26-08:00"
      },
      {
        "id": "FF33B9AD-9186-5A1B-97DB-760E4B1F32AF",
        "title": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo",
        "owner": "Flynn Orr",
        "price": 628147,
        "address": "P.O. Box 416, 7160 Tempus Street",
        "city": "Whitby",
        "country": "Chad",
        "created": "2016-02-28T08:57:37-08:00"
      },
      {
        "id": "12B361FC-71C2-9895-3C6A-E0B488C3882D",
        "title": "dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per",
        "owner": "Graiden Nolan",
        "price": 1178687,
        "address": "978-1259 Laoreet Street",
        "city": "Lacombe",
        "country": "Palestine, State of",
        "created": "2017-06-29T22:39:35-07:00"
      },
      {
        "id": "DC1ECFB1-C68B-B6E4-F2F1-DB9C76417338",
        "title": "Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis",
        "owner": "Marvin Camacho",
        "price": 788468,
        "address": "P.O. Box 905, 6850 Nulla Av.",
        "city": "Kirkintilloch",
        "country": "Iran",
        "created": "2017-07-18T13:45:06-07:00"
      },
      {
        "id": "1DE4749E-A273-4171-D3F0-09FF92602F71",
        "title": "risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit",
        "owner": "Edan Casey",
        "price": 121815,
        "address": "Ap #553-703 Nunc Road",
        "city": "Nieuwkerken-Waas",
        "country": "Venezuela",
        "created": "2015-04-20T10:02:10-07:00"
      },
      {
        "id": "85894786-FC5D-BCCF-65E4-0117CC418C02",
        "title": "tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget,",
        "owner": "Chase Flowers",
        "price": 1771819,
        "address": "7235 Interdum. Av.",
        "city": "Montereale",
        "country": "Bulgaria",
        "created": "2016-10-07T19:48:35-07:00"
      },
      {
        "id": "4E458629-A028-6BCA-4F63-7F4AD8C852D2",
        "title": "ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam",
        "owner": "Honorato Conley",
        "price": 917105,
        "address": "Ap #255-992 Diam. Street",
        "city": "Miami",
        "country": "Brazil",
        "created": "2015-01-15T19:44:11-08:00"
      },
      {
        "id": "1EF2EB8E-71FC-3FB2-B86E-77A9D1D1D6E3",
        "title": "malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada",
        "owner": "Cruz Gates",
        "price": 1573919,
        "address": "9133 Orci. St.",
        "city": "Agra",
        "country": "Mexico",
        "created": "2015-05-21T04:00:18-07:00"
      },
      {
        "id": "64498726-7AD5-D2E4-C3E0-33CFD9BF4C6A",
        "title": "augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem.",
        "owner": "Mohammad Slater",
        "price": 1299224,
        "address": "Ap #812-8805 Mauris St.",
        "city": "Limbach-Oberfrohna",
        "country": "Namibia",
        "created": "2017-07-05T22:31:39-07:00"
      },
      {
        "id": "4E31345A-B105-414F-5E5C-DB67480243F0",
        "title": "luctus, ipsum leo elementum sem, vitae aliquam eros turpis non enim.",
        "owner": "Raymond Short",
        "price": 1499293,
        "address": "P.O. Box 868, 8589 Enim. Rd.",
        "city": "Ambresin",
        "country": "Ghana",
        "created": "2017-01-25T18:52:08-08:00"
      },
      {
        "id": "1C4ABE2D-7971-6566-1262-E18BB21CE257",
        "title": "Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In",
        "owner": "Ezra Valentine",
        "price": 198065,
        "address": "Ap #661-6314 Cursus. Av.",
        "city": "Montemignaio",
        "country": "Bouvet Island",
        "created": "2017-06-12T08:40:56-07:00"
      },
      {
        "id": "3724BAF7-07EE-4512-D9D6-47681938BA4B",
        "title": "neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor",
        "owner": "Xanthus Sanders",
        "price": 1475155,
        "address": "Ap #223-1595 Elit. Avenue",
        "city": "Rancagua",
        "country": "Pakistan",
        "created": "2016-06-12T06:27:29-07:00"
      },
      {
        "id": "B8E19AC1-57CB-0D07-BF91-46B4932EDADF",
        "title": "parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique",
        "owner": "Magee Clements",
        "price": 1241315,
        "address": "779-7638 Purus, Ave",
        "city": "Enschede",
        "country": "Saint Barthélemy",
        "created": "2014-07-31T02:44:17-07:00"
      },
      {
        "id": "3D8909F1-2D20-69D7-C4C7-5DF67584FD5E",
        "title": "libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis",
        "owner": "Yoshio Donovan",
        "price": 1769003,
        "address": "P.O. Box 956, 9772 Aenean St.",
        "city": "Pedro Aguirre Cerda",
        "country": "Lesotho",
        "created": "2014-05-18T17:10:35-07:00"
      },
      {
        "id": "4DFC9EE2-F2B1-B9AB-8442-CEBB318443D3",
        "title": "Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
        "owner": "Kibo Richardson",
        "price": 1408193,
        "address": "167-8098 Eu Road",
        "city": "Wekweti",
        "country": "Bangladesh",
        "created": "2017-05-27T17:28:27-07:00"
      },
      {
        "id": "023490D0-042F-DE44-CAF9-B4C224AA655D",
        "title": "Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a",
        "owner": "Basil Duran",
        "price": 287658,
        "address": "565-4387 Tellus St.",
        "city": "Sart-Eustache",
        "country": "Egypt",
        "created": "2017-08-26T14:00:51-07:00"
      },
      {
        "id": "1DA441F4-264E-5773-AE07-880F30403E39",
        "title": "sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero",
        "owner": "Michael Livingston",
        "price": 622065,
        "address": "3290 Fermentum Road",
        "city": "San Pedro",
        "country": "Côte D'Ivoire (Ivory Coast)",
        "created": "2014-07-12T00:29:30-07:00"
      },
      {
        "id": "BB0D9CB4-1ADA-B032-2128-A8A53C7976A2",
        "title": "ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel",
        "owner": "Jonas Baird",
        "price": 1596822,
        "address": "P.O. Box 787, 6468 Malesuada Avenue",
        "city": "Beaufays",
        "country": "Romania",
        "created": "2016-11-14T21:08:20-08:00"
      },
      {
        "id": "21FEEDC0-69DE-B026-0FCA-22AC34BF682F",
        "title": "purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim",
        "owner": "Adam Walsh",
        "price": 871712,
        "address": "547 Vestibulum Road",
        "city": "Laurencekirk",
        "country": "Equatorial Guinea",
        "created": "2015-02-27T18:46:33-08:00"
      },
      {
        "id": "32487D71-A165-81F0-9BDB-681B8751044D",
        "title": "Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et",
        "owner": "Raja Zimmerman",
        "price": 1134124,
        "address": "725-4952 Mi Street",
        "city": "South Perth",
        "country": "Russian Federation",
        "created": "2015-07-25T00:55:28-07:00"
      },
      {
        "id": "6ADE3A52-0E7A-ABBA-B3A5-64F477E0513D",
        "title": "dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero",
        "owner": "Francis Sloan",
        "price": 1097912,
        "address": "903-2314 Eros. Street",
        "city": "Warburg",
        "country": "Mauritius",
        "created": "2014-11-19T06:34:12-08:00"
      },
      {
        "id": "14372199-74E2-41E8-4626-81302C7E5688",
        "title": "et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim",
        "owner": "Kennan Santos",
        "price": 1986381,
        "address": "P.O. Box 537, 8271 Nascetur Avenue",
        "city": "Chilliwack",
        "country": "Myanmar",
        "created": "2015-04-07T08:46:34-07:00"
      },
      {
        "id": "48CB9B2A-6FFF-B397-E107-9D47D66A5230",
        "title": "orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis.",
        "owner": "Duncan Sheppard",
        "price": 377859,
        "address": "Ap #269-3252 Arcu. St.",
        "city": "Beerse",
        "country": "Belarus",
        "created": "2016-08-24T13:05:27-07:00"
      },
      {
        "id": "3BF82223-CA04-DAAA-BF90-761F7DB031F1",
        "title": "Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida",
        "owner": "Gabriel Blackburn",
        "price": 1399102,
        "address": "190-4711 Sem Avenue",
        "city": "Grimbergen",
        "country": "Hungary",
        "created": "2017-11-18T01:22:09-08:00"
      },
      {
        "id": "567C9B97-0B47-C379-9207-6EBBA14A383C",
        "title": "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus ornare.",
        "owner": "Reese Green",
        "price": 1420515,
        "address": "1273 Mi Street",
        "city": "Bauchi",
        "country": "Mayotte",
        "created": "2017-06-10T01:46:14-07:00"
      },
      {
        "id": "2671B102-2054-65A0-E0D5-F8697E214FB8",
        "title": "dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor.",
        "owner": "Moses Mcmahon",
        "price": 1544098,
        "address": "P.O. Box 995, 1345 Sed Rd.",
        "city": "Los Muermos",
        "country": "Saint Martin",
        "created": "2017-08-21T05:29:21-07:00"
      },
      {
        "id": "82D64DBF-EF4C-3BBE-42AB-4F60B4524E69",
        "title": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "owner": "Phillip West",
        "price": 626072,
        "address": "940-9476 Molestie Rd.",
        "city": "Tillicoultry",
        "country": "Jersey",
        "created": "2015-07-29T23:47:13-07:00"
      },
      {
        "id": "036FB31F-231E-0AF9-D49F-D68970BA374B",
        "title": "metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat",
        "owner": "Orson Mueller",
        "price": 346412,
        "address": "936-3545 Morbi Rd.",
        "city": "Philadelphia",
        "country": "Belarus",
        "created": "2014-08-23T09:41:42-07:00"
      },
      {
        "id": "992A26B6-96AC-BBEA-A3A7-8C80B2D5CBBA",
        "title": "et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum",
        "owner": "Grady Hardin",
        "price": 1393561,
        "address": "964-1394 Duis Ave",
        "city": "St. Clears",
        "country": "French Guiana",
        "created": "2016-11-27T04:37:40-08:00"
      },
      {
        "id": "DFB8D9F9-EB10-8B32-FA6D-8CCF8C168353",
        "title": "congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante",
        "owner": "Ezekiel Jefferson",
        "price": 613612,
        "address": "Ap #691-1254 Auctor, Ave",
        "city": "Albano di Lucania",
        "country": "Algeria",
        "created": "2014-11-01T19:05:27-07:00"
      },
      {
        "id": "9D8B9FA4-6B7F-00CA-9596-C602013F9D7B",
        "title": "nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque",
        "owner": "Arsenio Park",
        "price": 140174,
        "address": "535-3828 Sem. Avenue",
        "city": "Klabbeek",
        "country": "Mongolia",
        "created": "2014-12-19T04:37:22-08:00"
      },
      {
        "id": "DC1308CA-7794-1215-B028-FD2CF71D9715",
        "title": "imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit",
        "owner": "Robert Talley",
        "price": 712996,
        "address": "P.O. Box 568, 3084 Magna. Road",
        "city": "Wiener Neustadt",
        "country": "Switzerland",
        "created": "2017-11-07T20:30:19-08:00"
      },
      {
        "id": "1D9BED43-A281-0D7E-D494-CB56295CCF73",
        "title": "libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus",
        "owner": "Clinton Craft",
        "price": 1575877,
        "address": "P.O. Box 906, 2088 Enim Av.",
        "city": "Ross-on-Wye",
        "country": "Madagascar",
        "created": "2017-01-20T02:35:56-08:00"
      },
      {
        "id": "F76C7E78-007E-028D-8D89-EF4D5482D76D",
        "title": "lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non",
        "owner": "Wesley Snow",
        "price": 164726,
        "address": "9119 Sed Street",
        "city": "Thorembais-Saint-Trond",
        "country": "Somalia",
        "created": "2016-07-17T11:29:17-07:00"
      },
      {
        "id": "3E9B1F44-C2E0-9B9A-7CE3-670AD1E46E82",
        "title": "tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit",
        "owner": "Damon Kennedy",
        "price": 1278425,
        "address": "623-4037 Iaculis Ave",
        "city": "Warren",
        "country": "Uruguay",
        "created": "2014-05-19T13:02:30-07:00"
      },
      {
        "id": "CCD9ADE5-7492-2323-AF36-03FF414E8B74",
        "title": "amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem,",
        "owner": "Omar Rivas",
        "price": 1162734,
        "address": "684-8797 Faucibus Av.",
        "city": "Ukkel",
        "country": "Montenegro",
        "created": "2016-08-27T23:02:06-07:00"
      },
      {
        "id": "62350475-80F4-34DA-5A16-D885C997B62E",
        "title": "Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc,",
        "owner": "Uriel Oneill",
        "price": 881811,
        "address": "326-9284 Penatibus St.",
        "city": "Augsburg",
        "country": "Mayotte",
        "created": "2014-11-19T03:56:50-08:00"
      },
      {
        "id": "6EAB2889-7CA6-995A-AFED-335D81610102",
        "title": "elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras",
        "owner": "Jasper Parks",
        "price": 450926,
        "address": "P.O. Box 668, 6588 Ipsum. Avenue",
        "city": "Cabildo",
        "country": "Jamaica",
        "created": "2015-05-28T13:17:47-07:00"
      },
      {
        "id": "412353CB-C13E-72B9-5903-C1C447737AAE",
        "title": "felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor",
        "owner": "Adrian Love",
        "price": 1762315,
        "address": "P.O. Box 190, 3806 Aliquet Rd.",
        "city": "Alcobendas",
        "country": "Greece",
        "created": "2014-01-05T10:58:53-08:00"
      },
      {
        "id": "789A3686-676B-9DAF-5AB7-B95A8E884137",
        "title": "nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum",
        "owner": "Wayne Lindsey",
        "price": 450303,
        "address": "P.O. Box 860, 7722 Amet Rd.",
        "city": "Bouffioulx",
        "country": "Denmark",
        "created": "2015-12-20T23:44:09-08:00"
      },
      {
        "id": "B80153AE-21CB-EC37-30E0-9F7D2CDFEA99",
        "title": "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
        "owner": "Walker Oconnor",
        "price": 737330,
        "address": "723-555 A, St.",
        "city": "Armstrong",
        "country": "Burkina Faso",
        "created": "2014-06-26T12:45:48-07:00"
      },
      {
        "id": "C14D9AA9-1D5B-9B59-6380-252A7C5E3891",
        "title": "tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit",
        "owner": "Mufutau Terrell",
        "price": 1951924,
        "address": "607-5906 Nec St.",
        "city": "Daman",
        "country": "Malaysia",
        "created": "2015-03-28T08:20:06-07:00"
      },
      {
        "id": "22AB4357-B21E-7E40-956F-7B94BC052FE8",
        "title": "aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean",
        "owner": "Brendan Johnston",
        "price": 1522163,
        "address": "Ap #164-296 Nascetur Avenue",
        "city": "Fort Providence",
        "country": "Andorra",
        "created": "2014-07-24T06:59:23-07:00"
      },
      {
        "id": "648EC821-DD22-B7E9-3196-CAF01DD4ED5E",
        "title": "arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies",
        "owner": "Wayne Tyson",
        "price": 993765,
        "address": "P.O. Box 791, 1769 Congue Avenue",
        "city": "Stornaway",
        "country": "Zimbabwe",
        "created": "2014-11-18T16:22:58-08:00"
      },
      {
        "id": "40BB33D6-CC15-278B-B6D8-FF984CA498C7",
        "title": "diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra",
        "owner": "Alec Watson",
        "price": 1853626,
        "address": "Ap #903-4832 Egestas. Rd.",
        "city": "Blevio",
        "country": "Vanuatu",
        "created": "2014-01-17T18:13:24-08:00"
      },
      {
        "id": "02842361-FFE1-E047-70EA-05FCFDD28F72",
        "title": "tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget",
        "owner": "Kenyon Duran",
        "price": 1925316,
        "address": "178 Nisi St.",
        "city": "Rouvroy",
        "country": "Viet Nam",
        "created": "2014-12-29T10:06:17-08:00"
      },
      {
        "id": "BBEA9003-7B2C-7F2D-6EE6-A23F0320A39A",
        "title": "ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi.",
        "owner": "Davis Marks",
        "price": 1603193,
        "address": "1472 Lobortis Ave",
        "city": "Fleurus",
        "country": "Sudan",
        "created": "2015-08-30T12:44:21-07:00"
      },
      {
        "id": "120C96AD-3173-714B-ED12-646F3751D5D7",
        "title": "magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam",
        "owner": "Lawrence Good",
        "price": 1976320,
        "address": "Ap #662-4090 Auctor Avenue",
        "city": "Sherbrooke",
        "country": "Israel",
        "created": "2016-10-04T03:53:37-07:00"
      },
      {
        "id": "792CC4A3-0B41-BE36-515A-CFEFB03D2771",
        "title": "rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi",
        "owner": "Christopher Sanders",
        "price": 1343130,
        "address": "721-9756 Quis Street",
        "city": "Pointe-Claire",
        "country": "Croatia",
        "created": "2017-01-09T17:31:13-08:00"
      },
      {
        "id": "D7EF7880-9B23-7EC8-6774-08154C843CF5",
        "title": "enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non",
        "owner": "Wylie Jackson",
        "price": 1404032,
        "address": "9699 Massa. St.",
        "city": "Beawar",
        "country": "Virgin Islands, British",
        "created": "2016-05-15T09:10:56-07:00"
      },
      {
        "id": "CF79182F-E74E-51B0-3724-74D0D7535D65",
        "title": "ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis",
        "owner": "Jameson Byrd",
        "price": 462062,
        "address": "Ap #526-6775 Praesent Ave",
        "city": "Villafranca in Lunigiana",
        "country": "Cambodia",
        "created": "2014-05-01T23:44:48-07:00"
      },
      {
        "id": "3650C642-0BAF-1B82-8619-A81ABEFA5EAB",
        "title": "ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus",
        "owner": "Dexter Gillespie",
        "price": 1531161,
        "address": "Ap #469-4648 Convallis, St.",
        "city": "Neerrepen",
        "country": "Finland",
        "created": "2014-03-25T17:22:05-07:00"
      },
      {
        "id": "5DCC5A1B-93DD-A6D5-8971-9EC028265A89",
        "title": "erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque",
        "owner": "Abraham Fisher",
        "price": 1827224,
        "address": "Ap #240-4567 Vivamus Street",
        "city": "Nedlands",
        "country": "Algeria",
        "created": "2014-02-06T03:47:44-08:00"
      },
      {
        "id": "8B76E3ED-AE22-6A3A-3BA8-CC63B2297DB0",
        "title": "et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa",
        "owner": "Zeph Wagner",
        "price": 328685,
        "address": "974-2589 Mauris St.",
        "city": "Abbotsford",
        "country": "Suriname",
        "created": "2015-11-20T04:06:40-08:00"
      },
      {
        "id": "41CB888B-32B0-8CE0-C836-BF18B015ECE1",
        "title": "facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci,",
        "owner": "Joseph Garrison",
        "price": 1985305,
        "address": "Ap #929-147 Nunc St.",
        "city": "Fauglia",
        "country": "Monaco",
        "created": "2014-08-19T23:58:16-07:00"
      },
      {
        "id": "A7DF1013-0BA4-869E-F688-B2E4E9E46C56",
        "title": "elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque",
        "owner": "Todd Bowen",
        "price": 1698762,
        "address": "760-7238 Ipsum Street",
        "city": "North Cowichan",
        "country": "Swaziland",
        "created": "2015-11-08T07:27:16-08:00"
      },
      {
        "id": "7B6B501F-CDA2-9CF8-E3F0-3BCB91E131B5",
        "title": "erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque",
        "owner": "Erasmus Watkins",
        "price": 484666,
        "address": "1390 Iaculis Av.",
        "city": "Radom",
        "country": "Zambia",
        "created": "2015-01-17T09:15:49-08:00"
      },
      {
        "id": "CF65FB84-2B42-055A-C540-0057C82AB23B",
        "title": "turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam",
        "owner": "Ezra Murray",
        "price": 447833,
        "address": "Ap #975-9112 Ultricies Road",
        "city": "Polcenigo",
        "country": "Portugal",
        "created": "2017-08-19T09:08:08-07:00"
      },
      {
        "id": "ED2AB162-F41E-88FF-768C-0D8985E19009",
        "title": "ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat",
        "owner": "Edward Colon",
        "price": 946125,
        "address": "Ap #703-5319 Consequat Avenue",
        "city": "Castelmezzano",
        "country": "Pakistan",
        "created": "2017-06-14T02:10:46-07:00"
      },
      {
        "id": "BC01CFE7-E3B3-3585-F9E2-C01B2F890B68",
        "title": "cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis.",
        "owner": "Rudyard Simpson",
        "price": 657692,
        "address": "Ap #722-5389 Nec St.",
        "city": "Curitiba",
        "country": "Venezuela",
        "created": "2016-06-15T05:20:00-07:00"
      },
      {
        "id": "05BE4D0E-F084-2DC2-431B-B427B8A8F940",
        "title": "ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla,",
        "owner": "Harlan Briggs",
        "price": 431015,
        "address": "812-1163 Convallis Road",
        "city": "Temse",
        "country": "Bouvet Island",
        "created": "2017-03-31T21:46:35-07:00"
      },
      {
        "id": "391CF302-0D25-3778-2338-FAFAD3007735",
        "title": "at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi,",
        "owner": "Nigel Lara",
        "price": 840267,
        "address": "967-7285 Facilisis, Rd.",
        "city": "Kumbakonam",
        "country": "Mayotte",
        "created": "2016-06-25T04:37:35-07:00"
      },
      {
        "id": "B98D4FB7-C0A9-873C-2AD0-CD339CE21D60",
        "title": "sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis",
        "owner": "Austin Talley",
        "price": 1717995,
        "address": "P.O. Box 251, 4454 Metus. Ave",
        "city": "Chépica",
        "country": "Guinea",
        "created": "2015-04-17T13:27:30-07:00"
      },
      {
        "id": "2E546AD4-4782-D004-B163-FF6BDEB8461F",
        "title": "non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu,",
        "owner": "Zahir Cannon",
        "price": 1892743,
        "address": "962 Blandit Ave",
        "city": "Korba",
        "country": "Sint Maarten",
        "created": "2017-06-11T05:04:11-07:00"
      },
      {
        "id": "798E7202-EB2C-6B8C-0B1F-DBCB9E5F5489",
        "title": "aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem",
        "owner": "Wayne Joseph",
        "price": 970164,
        "address": "5356 Euismod Rd.",
        "city": "Langenburg",
        "country": "Vanuatu",
        "created": "2017-03-23T18:18:05-07:00"
      },
      {
        "id": "09766C4A-83A5-F851-4A68-D572DB34A59C",
        "title": "sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci.",
        "owner": "Chancellor Bray",
        "price": 310089,
        "address": "791-3111 Nunc Street",
        "city": "Comblain-la-Tour",
        "country": "Jersey",
        "created": "2017-07-12T16:46:18-07:00"
      },
      {
        "id": "7A465BFE-7B5A-E0B4-D913-4505DDFD30A8",
        "title": "fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper",
        "owner": "Neil Wilson",
        "price": 1829438,
        "address": "Ap #297-9275 Vestibulum Rd.",
        "city": "Ayas",
        "country": "Somalia",
        "created": "2015-02-03T06:13:14-08:00"
      },
      {
        "id": "21D5AA39-01FA-C74A-A5A1-720999C72221",
        "title": "commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus",
        "owner": "Wyatt Hatfield",
        "price": 1604550,
        "address": "Ap #301-5685 Nibh St.",
        "city": "Dunfermline",
        "country": "Saint Pierre and Miquelon",
        "created": "2017-11-23T17:26:44-08:00"
      },
      {
        "id": "53B01CA0-520C-8E63-06CB-611BDA7594A1",
        "title": "mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante",
        "owner": "Elliott Cummings",
        "price": 848137,
        "address": "814-536 Vivamus Rd.",
        "city": "Boneffe",
        "country": "South Georgia and The South Sandwich Islands",
        "created": "2015-06-08T04:54:38-07:00"
      },
      {
        "id": "2ACDF9F5-C000-DE37-1E9B-77D9C98701DE",
        "title": "eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing",
        "owner": "Lee Joyner",
        "price": 241321,
        "address": "Ap #254-6058 Dolor. Ave",
        "city": "Mulchén",
        "country": "El Salvador",
        "created": "2015-07-08T12:47:50-07:00"
      },
      {
        "id": "99D988C5-DC58-28D6-8230-0894DA1D3100",
        "title": "cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget",
        "owner": "Jared Newman",
        "price": 1612435,
        "address": "P.O. Box 143, 2973 Ac Rd.",
        "city": "Kooigem",
        "country": "Viet Nam",
        "created": "2016-08-26T17:49:42-07:00"
      },
      {
        "id": "077293A4-8215-BC9A-BA6E-E65F36631CFF",
        "title": "Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non",
        "owner": "Christopher Dalton",
        "price": 347234,
        "address": "1936 Aliquam Street",
        "city": "Annapolis County",
        "country": "Tonga",
        "created": "2016-03-27T08:35:18-07:00"
      },
      {
        "id": "8B0CABDD-9773-FB31-05DC-50DC045946D6",
        "title": "sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus",
        "owner": "Vincent Casey",
        "price": 1450823,
        "address": "Ap #655-3962 Ultricies Rd.",
        "city": "Zignago",
        "country": "Afghanistan",
        "created": "2014-08-09T20:56:01-07:00"
      },
      {
        "id": "F2D30ECB-0181-300B-B1EB-FDEAEBF0B8D6",
        "title": "nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat",
        "owner": "Laith Alston",
        "price": 1837614,
        "address": "1525 Sem Av.",
        "city": "Calama",
        "country": "Mayotte",
        "created": "2017-01-10T19:49:33-08:00"
      },
      {
        "id": "242034DF-1A55-55FE-B50A-5E8E98F3ABE2",
        "title": "imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam",
        "owner": "Brendan Richmond",
        "price": 550228,
        "address": "P.O. Box 581, 3003 Massa Rd.",
        "city": "Itapipoca",
        "country": "Mayotte",
        "created": "2015-09-16T05:52:58-07:00"
      },
      {
        "id": "646D7E6B-762C-087B-C4D8-15CE8C1C15E8",
        "title": "non enim commodo hendrerit. Donec porttitor tellus non magna. Nam",
        "owner": "Dante Foley",
        "price": 1958092,
        "address": "4071 Cursus St.",
        "city": "Cartagena",
        "country": "Botswana",
        "created": "2017-05-26T20:08:46-07:00"
      },
      {
        "id": "596C3BBE-1156-A504-009F-5DF9847F84DC",
        "title": "adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi.",
        "owner": "Jesse Bennett",
        "price": 731205,
        "address": "Ap #344-5170 Morbi Road",
        "city": "Calvi Risorta",
        "country": "Cook Islands",
        "created": "2017-08-25T01:59:42-07:00"
      },
      {
        "id": "22629DEB-4695-11F5-35E5-AEB22163B540",
        "title": "orci luctus et ultrices posuere cubilia Curae; Phasellus ornare. Fusce mollis. Duis sit",
        "owner": "Murphy Wolf",
        "price": 1808630,
        "address": "150-2998 Cum Avenue",
        "city": "Castelnovo del Friuli",
        "country": "Montenegro",
        "created": "2017-02-02T15:17:17-08:00"
      },
      {
        "id": "830CA4FE-AC8D-353F-C923-1C320786640B",
        "title": "a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam,",
        "owner": "Steel Winters",
        "price": 124422,
        "address": "5832 Aliquam Rd.",
        "city": "St. Johann in Tirol",
        "country": "Niger",
        "created": "2014-01-17T01:48:17-08:00"
      },
      {
        "id": "5E9CF7C4-E5FB-2D84-5352-6741AC6333E4",
        "title": "facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam",
        "owner": "Bert Gonzales",
        "price": 997703,
        "address": "6571 Neque. St.",
        "city": "Masullas",
        "country": "Brazil",
        "created": "2016-07-14T21:06:26-07:00"
      },
      {
        "id": "7FDA122D-5635-5585-35CF-8E3C721FC8BC",
        "title": "mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris",
        "owner": "Ahmed Walter",
        "price": 222984,
        "address": "4148 Ante Ave",
        "city": "Spokane",
        "country": "Romania",
        "created": "2017-09-11T05:11:40-07:00"
      },
      {
        "id": "78C1D4E7-EFA0-2596-725E-DCBE2D40D9E7",
        "title": "faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent",
        "owner": "Uriel Caldwell",
        "price": 937308,
        "address": "5709 Feugiat Ave",
        "city": "Badalona",
        "country": "Italy",
        "created": "2017-05-25T21:36:29-07:00"
      },
      {
        "id": "28685D3B-C6EA-180C-86CD-DA31EA9FFF25",
        "title": "eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed",
        "owner": "Timon Carroll",
        "price": 1146300,
        "address": "Ap #881-6292 Libero Rd.",
        "city": "Merseburg",
        "country": "Nigeria",
        "created": "2014-10-20T15:51:43-07:00"
      },
      {
        "id": "5C6D130E-D1E1-1811-F9CE-5EF21F76314C",
        "title": "Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit,",
        "owner": "Tyrone Velez",
        "price": 127583,
        "address": "Ap #477-1430 Cras St.",
        "city": "Eschwege",
        "country": "Guernsey",
        "created": "2015-02-20T03:32:22-08:00"
      },
      {
        "id": "03BA49CE-1641-D6AE-C395-F2982EF1EE38",
        "title": "rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce",
        "owner": "Jerry Huffman",
        "price": 798348,
        "address": "P.O. Box 616, 4527 Elit. Road",
        "city": "Ashoknagar-Kalyangarh",
        "country": "Isle of Man",
        "created": "2014-10-24T21:15:01-07:00"
      },
      {
        "id": "425A2B5A-4A51-B9EE-AD53-7B5F7B244686",
        "title": "mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi.",
        "owner": "Emmanuel Patton",
        "price": 786786,
        "address": "Ap #674-8252 Fusce Av.",
        "city": "Westmeerbeek",
        "country": "El Salvador",
        "created": "2015-11-12T01:20:47-08:00"
      },
      {
        "id": "AEE35F5F-AC74-DF08-8A9E-A856DA02F55D",
        "title": "Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis",
        "owner": "Brandon Rosa",
        "price": 1339030,
        "address": "262-7013 Ac St.",
        "city": "Castletown",
        "country": "Turks and Caicos Islands",
        "created": "2014-09-13T11:48:03-07:00"
      },
      {
        "id": "86290F80-8D9A-ACC6-56BC-66660FA2A28A",
        "title": "Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in",
        "owner": "Hall Ochoa",
        "price": 1949366,
        "address": "P.O. Box 155, 265 Ornare, Rd.",
        "city": "Parchim  City",
        "country": "Pakistan",
        "created": "2014-12-12T01:08:39-08:00"
      },
      {
        "id": "1971623B-A5D2-F8C0-0BF0-5B4A17A86B00",
        "title": "Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim",
        "owner": "Ulric Bailey",
        "price": 567936,
        "address": "P.O. Box 140, 8084 Id, Rd.",
        "city": "Sachs Harbour",
        "country": "Falkland Islands",
        "created": "2014-01-19T10:25:44-08:00"
      },
      {
        "id": "36B529C3-64CD-422C-C89D-AC49879DEBE7",
        "title": "ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero.",
        "owner": "Graham Fowler",
        "price": 1750535,
        "address": "728-3751 Non, Rd.",
        "city": "Ludhiana",
        "country": "Moldova",
        "created": "2015-03-13T10:21:11-07:00"
      },
      {
        "id": "917C2EBF-9041-CE3B-0938-1F6349E53FCF",
        "title": "id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus",
        "owner": "Kenyon Burt",
        "price": 1268298,
        "address": "P.O. Box 706, 6138 At, St.",
        "city": "Kanchipuram",
        "country": "Georgia",
        "created": "2015-07-28T03:50:04-07:00"
      },
      {
        "id": "C08D449F-14E5-6F96-85C1-B7AB34E80832",
        "title": "malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer",
        "owner": "Allen Cash",
        "price": 805280,
        "address": "9472 Non Rd.",
        "city": "San Javier",
        "country": "Tajikistan",
        "created": "2016-04-14T22:59:47-07:00"
      },
      {
        "id": "588AC0AC-593E-0961-5E33-AEB9F9DF8637",
        "title": "non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris,",
        "owner": "Ross Singleton",
        "price": 325043,
        "address": "P.O. Box 598, 1204 Fermentum Rd.",
        "city": "Merritt",
        "country": "Nauru",
        "created": "2015-02-22T22:54:11-08:00"
      },
      {
        "id": "D7D134EF-CCBD-458D-60B9-B73CD2E2A08E",
        "title": "orci luctus et ultrices posuere cubilia Curae; Donec tincidunt. Donec vitae erat vel pede blandit",
        "owner": "Uriel Burch",
        "price": 799329,
        "address": "254-4253 Sem Rd.",
        "city": "New Galloway",
        "country": "Lithuania",
        "created": "2015-01-18T11:40:09-08:00"
      },
      {
        "id": "F05F8DA4-200B-84A8-D16C-240638D52FB6",
        "title": "dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque",
        "owner": "Demetrius King",
        "price": 1592708,
        "address": "Ap #100-2425 Mauris Rd.",
        "city": "Fusignano",
        "country": "Croatia",
        "created": "2015-03-03T17:47:12-08:00"
      },
      {
        "id": "9D412DBE-93A0-E79B-8801-5893061DB546",
        "title": "dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis",
        "owner": "Ryder Hester",
        "price": 572346,
        "address": "P.O. Box 749, 6025 Imperdiet St.",
        "city": "Delitzsch",
        "country": "Bulgaria",
        "created": "2015-02-13T06:45:40-08:00"
      },
      {
        "id": "8F4423FF-B0EE-6DD4-5051-151729C006D8",
        "title": "non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam",
        "owner": "Colby Ayala",
        "price": 506726,
        "address": "580-628 Donec Street",
        "city": "Montemignaio",
        "country": "Kyrgyzstan",
        "created": "2014-12-08T07:00:13-08:00"
      },
      {
        "id": "EC9C423F-522B-B889-D4CC-2160997E493E",
        "title": "fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla",
        "owner": "Damian Cannon",
        "price": 1849193,
        "address": "7469 Est, Ave",
        "city": "Olathe",
        "country": "Uzbekistan",
        "created": "2014-10-27T09:56:37-07:00"
      },
      {
        "id": "1FF05357-368E-BA01-6576-FBF4D7D45FA3",
        "title": "dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas",
        "owner": "Thane Cervantes",
        "price": 1786237,
        "address": "Ap #287-4051 Vivamus Avenue",
        "city": "Follina",
        "country": "Nigeria",
        "created": "2016-08-05T07:03:07-07:00"
      },
      {
        "id": "ED334CAC-0348-4B7C-E24F-D095CB393C78",
        "title": "Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce",
        "owner": "Donovan Schmidt",
        "price": 677812,
        "address": "672-4219 Euismod Road",
        "city": "Clarksville",
        "country": "Tokelau",
        "created": "2016-06-28T21:35:39-07:00"
      },
      {
        "id": "F5B246B1-4E6C-A0DA-D072-D96AB7D3BA40",
        "title": "feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper.",
        "owner": "Scott Coffey",
        "price": 1701554,
        "address": "736-5918 Taciti Avenue",
        "city": "Shippagan",
        "country": "Dominican Republic",
        "created": "2016-01-31T23:25:03-08:00"
      },
      {
        "id": "6CDEA642-DEDF-AC32-2E0C-2100465AE426",
        "title": "et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna.",
        "owner": "Harrison Snow",
        "price": 1902224,
        "address": "998-8524 Ultricies St.",
        "city": "Paredones",
        "country": "Cuba",
        "created": "2016-09-04T18:54:42-07:00"
      },
      {
        "id": "9729592E-93B2-FBFC-3B2A-A6F4C379E771",
        "title": "tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede",
        "owner": "Micah Robinson",
        "price": 254203,
        "address": "4154 In Rd.",
        "city": "Raiganj",
        "country": "Åland Islands",
        "created": "2017-01-29T00:22:44-08:00"
      },
      {
        "id": "60205B28-D34C-B839-F534-2974C1A92354",
        "title": "tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id,",
        "owner": "Cole Graves",
        "price": 1681417,
        "address": "P.O. Box 172, 1084 Metus Ave",
        "city": "Lapscheure",
        "country": "Central African Republic",
        "created": "2014-09-18T13:25:44-07:00"
      },
      {
        "id": "B5732D43-5E94-8858-2E7A-BF2D74089539",
        "title": "mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus,",
        "owner": "Wyatt Curry",
        "price": 1180722,
        "address": "P.O. Box 550, 8417 Quis Av.",
        "city": "Heinsch",
        "country": "Bonaire, Sint Eustatius and Saba",
        "created": "2017-05-12T05:05:00-07:00"
      },
      {
        "id": "30192D22-A26E-244A-11C7-767D1FC349FB",
        "title": "feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam",
        "owner": "Burton Sawyer",
        "price": 1010571,
        "address": "1216 Arcu. Ave",
        "city": "Roux-Miroir",
        "country": "Singapore",
        "created": "2015-03-03T17:13:29-08:00"
      },
      {
        "id": "9E0E7306-0785-18FB-6FC4-117CD87AD800",
        "title": "Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio.",
        "owner": "Thane Klein",
        "price": 1225197,
        "address": "945-7322 Egestas St.",
        "city": "Gilly",
        "country": "Mali",
        "created": "2017-10-26T00:16:12-07:00"
      },
      {
        "id": "F0F7EF13-493A-306D-1F76-F1812B18C941",
        "title": "tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit",
        "owner": "Hakeem Hardin",
        "price": 257441,
        "address": "2341 Erat. Road",
        "city": "Acquasanta Terme",
        "country": "Nigeria",
        "created": "2014-09-29T19:26:09-07:00"
      },
      {
        "id": "B813BE10-2CA3-8079-0E87-07297FD5A3E7",
        "title": "Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a",
        "owner": "Austin Odonnell",
        "price": 688799,
        "address": "Ap #546-1384 Cum Street",
        "city": "Massarosa",
        "country": "Cape Verde",
        "created": "2015-09-04T02:35:46-07:00"
      },
      {
        "id": "6F396458-725D-A7B0-4B36-447C5D2639E0",
        "title": "mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia",
        "owner": "Kermit Sanders",
        "price": 1691732,
        "address": "744-6036 Sed St.",
        "city": "Chattanooga",
        "country": "Macedonia",
        "created": "2014-04-05T01:19:41-07:00"
      },
      {
        "id": "2862C783-8B11-3419-866F-3C9D74D66CA0",
        "title": "facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed",
        "owner": "Alec Howard",
        "price": 1505931,
        "address": "782 Non St.",
        "city": "Papudo",
        "country": "Senegal",
        "created": "2016-11-26T09:42:10-08:00"
      },
      {
        "id": "1CFEB81F-FD88-219C-437B-9CBE2F99C959",
        "title": "nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis",
        "owner": "Jermaine Jordan",
        "price": 337627,
        "address": "1387 Non Ave",
        "city": "Evere",
        "country": "Kenya",
        "created": "2017-05-05T09:09:20-07:00"
      },
      {
        "id": "29944004-F739-6ED8-0C53-B2C6B90B637C",
        "title": "suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in",
        "owner": "Holmes Olson",
        "price": 1512374,
        "address": "Ap #330-4245 Ullamcorper, Street",
        "city": "Honolulu",
        "country": "Macao",
        "created": "2016-06-05T20:05:46-07:00"
      },
      {
        "id": "2A3CE7CD-15E1-0E59-3F47-1A4EA56966EE",
        "title": "eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus.",
        "owner": "Joshua Underwood",
        "price": 1570729,
        "address": "507 Egestas Rd.",
        "city": "Quintero",
        "country": "Slovakia",
        "created": "2014-09-15T08:48:00-07:00"
      },
      {
        "id": "7EAFFB0E-137E-DAE0-8AEB-A74F9F9D5367",
        "title": "Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi",
        "owner": "Wallace Clark",
        "price": 548101,
        "address": "7110 Mattis. Rd.",
        "city": "Tumba",
        "country": "Western Sahara",
        "created": "2014-09-03T11:37:25-07:00"
      },
      {
        "id": "A947287E-BAE4-AB74-2A14-02150E3772EC",
        "title": "mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus,",
        "owner": "Burton Ochoa",
        "price": 1389680,
        "address": "190-5886 Neque. Ave",
        "city": "Jacksonville",
        "country": "Cayman Islands",
        "created": "2014-08-23T19:34:38-07:00"
      },
      {
        "id": "DBA1A5D5-0147-13F6-0450-60F3777537B5",
        "title": "imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at",
        "owner": "Oscar Simpson",
        "price": 1433613,
        "address": "Ap #587-2359 Adipiscing St.",
        "city": "Huissen",
        "country": "Tokelau",
        "created": "2015-05-30T19:55:19-07:00"
      },
      {
        "id": "DB9F6D23-EF18-ED1A-5B6A-137BE93A75DD",
        "title": "facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa",
        "owner": "Baker Calderon",
        "price": 847682,
        "address": "840 Convallis Avenue",
        "city": "Priero",
        "country": "Georgia",
        "created": "2016-03-27T09:15:54-07:00"
      },
      {
        "id": "FAA8C0F6-667E-C28A-8C60-8E8CC40359E9",
        "title": "ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna",
        "owner": "Dolan Preston",
        "price": 909880,
        "address": "5930 Rutrum Av.",
        "city": "Mont-Saint-AndrŽ",
        "country": "Ecuador",
        "created": "2017-11-12T07:13:05-08:00"
      },
      {
        "id": "6403DB0C-6943-9D7D-D085-3E0AF03E34E7",
        "title": "tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus",
        "owner": "Lev Morin",
        "price": 344927,
        "address": "Ap #530-7400 Nonummy Ave",
        "city": "Lienz",
        "country": "Slovenia",
        "created": "2014-01-12T09:16:14-08:00"
      },
      {
        "id": "D2D419F2-FA11-0436-AEE5-912D063BE615",
        "title": "elit. Aliquam auctor, velit eget laoreet posuere, enim nisl elementum purus, accumsan interdum libero",
        "owner": "Alden Travis",
        "price": 649971,
        "address": "3796 Dolor Street",
        "city": "Coihueco",
        "country": "Trinidad and Tobago",
        "created": "2016-12-11T04:53:57-08:00"
      },
      {
        "id": "3A8B9239-FBCC-C89B-C50F-74AA01A3CC03",
        "title": "Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus,",
        "owner": "Henry Patterson",
        "price": 109897,
        "address": "1391 Sed Av.",
        "city": "Queanbeyan",
        "country": "Virgin Islands, British",
        "created": "2014-01-24T09:03:15-08:00"
      },
      {
        "id": "9B503E65-3684-54A9-0FE8-83FEAB17B094",
        "title": "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam",
        "owner": "Gregory Graham",
        "price": 1511109,
        "address": "6803 Nulla Road",
        "city": "Ospedaletto d'Alpinolo",
        "country": "Somalia",
        "created": "2015-10-31T13:46:34-07:00"
      },
      {
        "id": "35E4CF6B-8A3D-8FFC-0092-EB97B6A4DFE7",
        "title": "Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem,",
        "owner": "Bevis Baxter",
        "price": 1881404,
        "address": "Ap #618-9969 In Rd.",
        "city": "Le Petit-Quevilly",
        "country": "Burkina Faso",
        "created": "2017-02-27T18:29:58-08:00"
      },
      {
        "id": "5699D6ED-FE93-B93B-A18D-53C56D2C1F2D",
        "title": "netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus.",
        "owner": "Kenyon Freeman",
        "price": 1850852,
        "address": "Ap #212-7695 Ullamcorper Street",
        "city": "Wilmington",
        "country": "Puerto Rico",
        "created": "2015-02-13T11:41:41-08:00"
      },
      {
        "id": "633AADD0-21D6-F91D-76C5-AFD8B4411D51",
        "title": "posuere cubilia Curae; Phasellus ornare. Fusce mollis. Duis sit amet diam eu",
        "owner": "Kenyon Owen",
        "price": 832266,
        "address": "P.O. Box 733, 8736 Cras St.",
        "city": "Lalbahadur Nagar",
        "country": "Afghanistan",
        "created": "2015-03-08T14:02:19-07:00"
      },
      {
        "id": "A1BA5C22-0F43-3DCF-28AB-D8D487F7F0BD",
        "title": "lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean",
        "owner": "Chancellor Kirkland",
        "price": 930913,
        "address": "123-8140 Lacus. Rd.",
        "city": "Wachtebeke",
        "country": "Paraguay",
        "created": "2017-10-19T04:52:23-07:00"
      },
      {
        "id": "EAA64F85-B365-D2AC-0D47-DD2C2E1EC145",
        "title": "urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at,",
        "owner": "Addison Boyle",
        "price": 1546339,
        "address": "256 Ligula. Rd.",
        "city": "Marsciano",
        "country": "Holy See (Vatican City State)",
        "created": "2014-02-28T03:23:37-08:00"
      },
      {
        "id": "A1B261F9-0AF3-8236-8AFC-7061B2AC6A42",
        "title": "massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus,",
        "owner": "Hop Solomon",
        "price": 1485204,
        "address": "930-2413 Mauris, St.",
        "city": "Tielen",
        "country": "Korea, North",
        "created": "2016-12-10T09:56:22-08:00"
      },
      {
        "id": "C6DF6CF1-BA80-AD25-445B-88CAE4483669",
        "title": "quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna",
        "owner": "Ross Pope",
        "price": 459918,
        "address": "474-4969 Consequat Rd.",
        "city": "Toledo",
        "country": "El Salvador",
        "created": "2016-05-05T08:49:57-07:00"
      },
      {
        "id": "031FF112-8DE5-AA49-EEAE-7FD1E59D836A",
        "title": "pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc",
        "owner": "Fitzgerald Floyd",
        "price": 1082184,
        "address": "P.O. Box 212, 9954 Tellus Road",
        "city": "Norderstedt",
        "country": "Angola",
        "created": "2016-10-31T08:08:04-07:00"
      }
    ]);
    await Inventory.ensureIndexes();
  });

  after(async () => {
  });

  describe('get inventory by id', function () {
    it('Should return list of inventories', async () => {
      const res = await request
        .get('/api/v1.0/inventories/031FF112-8DE5-AA49-EEAE-7FD1E59D836A')
        .expect(200)
        .expect('Content-Type', /json/);

      expect(res.body).to.be.an('object');
      expect(res.body.data).to.be.an('object');
      expect(res.body).to.have.property('success', true);
      expect(res.body.data.id).to.be.equal('031FF112-8DE5-AA49-EEAE-7FD1E59D836A');
    });

    it('Should return 404 for invalid inventory id', async () => {
      const res = await request
        .get('/api/v1.0/inventories/invalid')
        .expect(404)
        .expect('Content-Type', /json/);

      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('success', false);
      expect(res.body).to.have.property('code', 404);
    });
  })

  describe('get list', function () {

    it('Should return list of inventories', async () => {
      const res = await request
        .get('/api/v1.0/inventories')
        .expect(200)
        .expect('Content-Type', /json/);

      expect(res.body).to.be.an('object');
      expect(res.body.data).to.be.an('array');
      expect(res.body).to.have.property('success', true);
      expect(res.body.data.length).to.be.equal(20);
    });

    it('Should return search results with q parameter', async () => {
      const res = await request
        .get('/api/v1.0/inventories?q=Aenean')
        .expect(200)
        .expect('Content-Type', /json/);

      expect(res.body).to.be.an('object');
      expect(res.body.data).to.be.an('array');
      expect(res.body).to.have.property('success', true);
      for (inventory of res.body.data) {
        expect(inventory.owner + inventory.title).to.include.string("Aenean");
      }
    });

    it('Should sort the result by created in ascending order', async () => {
      const res = await request
        .get('/api/v1.0/inventories?sort=created&direction=asc')
        .expect(200)
        .expect('Content-Type', /json/);

      expect(res.body).to.be.an('object');
      expect(res.body.data).to.be.an('array');
      expect(res.body).to.have.property('success', true);
      expect(res.body.data.length).to.be.equal(20);
      let previous;
      for (const inventory of res.body.data) {
        if (previous) {
          expect(new Date(previous.created)).to.be.below(new Date(inventory.created));
        }
        previous = inventory;
      }
    });

    it('Should return 400 for invalid query parameters', async () => {
      const res = await request
        .get('/api/v1.0/inventories?sort=invalid&direction=asc')
        .expect(400)
        .expect('Content-Type', /json/);

      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('success', false);
      expect(res.body).to.have.property('code', 400);
    });
  });
});
