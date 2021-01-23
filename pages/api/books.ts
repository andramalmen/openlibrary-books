import fetch from 'isomorphic-unfetch';
import type { NextApiRequest, NextApiResponse } from 'next';
import { BOOKS_ENDPOINT, IMAGES_ENDPOINT } from '../../utils/constants';

const getImage = (id: string, size: string) =>
    id ? `${IMAGES_ENDPOINT}b/id/${id}-${size}.jpg` : undefined;

const getBooks = async (title: string) => {
    try {
        // const results = await fetch(
        //     `${BOOKS_ENDPOINT}search.json?title=${encodeURIComponent(title)}`
        // );
        // const json = await results.json();

        // const books = json.docs
        //     .map(book => {
        //         if (!book.author_name || !book.isbn) {
        //             return;
        //         }
        //         return {
        //             id: book.isbn[0] + '-' + book.edition_key[0],
        //             title: book.title,
        //             author: book.author_name.toString(),
        //             image: getImage(book.cover_i, 'L'),
        //             thumbnail: getImage(book.cover_i, 'S'),
        //             firstPublication: book.first_publish_year,
        //             isbn: book.isbn[0] ?? null,
        //         };
        //     })
        //     .filter(b => b);
        const books = [
            {
                id: '9780252068942-OL13852225M',
                title: 'Mist',
                author: 'Miguel de Unamuno',
                image: 'http://covers.openlibrary.org/b/id/147489-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/147489-S.jpg',
                firstPublication: 1929,
                isbn: '9780252068942',
            },
            {
                id: '9780765332080-OL26360882M',
                title: 'Mist',
                author: 'Susan Krinard',
                image: 'http://covers.openlibrary.org/b/id/8046289-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/8046289-S.jpg',
                firstPublication: 2013,
                isbn: '9780765332080',
            },
            {
                id: '9781858218281-OL3627403M',
                title: 'Mist',
                author: 'Linda Mann',
                firstPublication: 2001,
                isbn: '9781858218281',
            },
            {
                id: '9789068011913-OL12849543M',
                title: 'Mist',
                author: 'Jan van der Vegt',
                firstPublication: 1990,
                isbn: '9789068011913',
            },
            {
                id: '9698200037-OL3603058M',
                title: 'Mist',
                author: 'Safdar Sayyar',
                image: 'http://covers.openlibrary.org/b/id/4296653-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/4296653-S.jpg',
                firstPublication: 2002,
                isbn: '9698200037',
            },
            {
                id: '9781426835315-OL29569669M',
                title: 'Mist',
                author: 'Carla Neggers',
                firstPublication: 2009,
                isbn: '9781426835315',
            },
            {
                id: '9781460302392-OL29661324M',
                title: 'Mist',
                author: 'Carla Neggers',
                firstPublication: 2012,
                isbn: '9781460302392',
            },
            {
                id: '1488097445-OL29785443M',
                title: 'Mist',
                author: 'Carla Neggers',
                firstPublication: 2018,
                isbn: '1488097445',
            },
            {
                id: '1982103523-OL28898601M',
                title: 'Mist',
                author: 'Stephen King',
                firstPublication: 2018,
                isbn: '1982103523',
            },
            {
                id: '9782951884922-OL29122418M',
                title: 'Mist',
                author: 'Mist',
                firstPublication: 2005,
                isbn: '9782951884922',
            },
            {
                id: '1408955393-OL29110091M',
                title: 'Mist',
                author: 'Carla Neggers',
                firstPublication: 2011,
                isbn: '1408955393',
            },
            {
                id: '9789023654407-OL4168381M',
                title: 'Mist',
                author: 'Mireille Cottenjé',
                firstPublication: 1979,
                isbn: '9789023654407',
            },
            {
                id: '0863117031-OL18249708M',
                title: 'Mist',
                author: 'M. T. Vāsudēvan Nāyar',
                firstPublication: 1997,
                isbn: '0863117031',
            },
            {
                id: '1082420875-OL28746903M',
                title: 'Misted',
                author: 'Rina Kent',
                image: 'http://covers.openlibrary.org/b/id/10355105-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/10355105-S.jpg',
                firstPublication: 2019,
                isbn: '1082420875',
            },
            {
                id: '1945247142-OL27393753M',
                title: 'Mist',
                author: 'Amy Fontaine',
                image: 'http://covers.openlibrary.org/b/id/8856400-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/8856400-S.jpg',
                firstPublication: 2017,
                isbn: '1945247142',
            },
            {
                id: '9780099585428-OL28252305M',
                title: 'Mist',
                author: 'Mary Fitzgerald',
                image: 'http://covers.openlibrary.org/b/id/10182029-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/10182029-S.jpg',
                firstPublication: 2015,
                isbn: '9780099585428',
            },
            {
                id: '9781444903805-OL28954394M',
                title: 'Mist',
                author: 'Kathryn James',
                image: 'http://covers.openlibrary.org/b/id/10366888-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/10366888-S.jpg',
                firstPublication: 2011,
                isbn: '9781444903805',
            },
            {
                id: '0809532891-OL2463898M',
                title: 'The People of the Mist',
                author: 'H. Rider Haggard',
                image: 'http://covers.openlibrary.org/b/id/8228482-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/8228482-S.jpg',
                firstPublication: 1894,
                isbn: '0809532891',
            },
            {
                id: '9780375714214-OL13632915M',
                title: 'Middle mist',
                author: 'Mary Renault',
                image: 'http://covers.openlibrary.org/b/id/229212-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/229212-S.jpg',
                firstPublication: 1944,
                isbn: '9780375714214',
            },
            {
                id: '8401326303-OL22329777M',
                title: 'Pearl in the Mist',
                author: 'V. C. Andrews',
                image: 'http://covers.openlibrary.org/b/id/8445430-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/8445430-S.jpg',
                firstPublication: 1994,
                isbn: '8401326303',
            },
            {
                id: '0394524063-OL9432312M',
                title: 'The mists of Avalon',
                author: 'Marion Zimmer Bradley',
                image: 'http://covers.openlibrary.org/b/id/6540108-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/6540108-S.jpg',
                firstPublication: 1979,
                isbn: '0394524063',
            },
            {
                id: '9780451223296-OL31450022M',
                title: 'The Mist',
                author: 'Stephen King',
                image: 'http://covers.openlibrary.org/b/id/9330636-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/9330636-S.jpg',
                firstPublication: 1986,
                isbn: '9780451223296',
            },
            {
                id: '0091147700-OL24973759M',
                title: 'Middle Mist',
                author: 'Netta Muskett',
                image: 'http://covers.openlibrary.org/b/id/6891541-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/6891541-S.jpg',
                firstPublication: 1937,
                isbn: '0091147700',
            },
            {
                id: '0778327736-OL24456330M',
                title: 'The mist',
                author: 'Carla Neggers',
                image: 'http://covers.openlibrary.org/b/id/7106143-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/7106143-S.jpg',
                firstPublication: 2009,
                isbn: '0778327736',
            },
            {
                id: '9780736613095-OL14951387M',
                title: 'Towers in the Mist',
                author: 'Elizabeth Goudge',
                image: 'http://covers.openlibrary.org/b/id/8828905-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/8828905-S.jpg',
                firstPublication: 1938,
                isbn: '9780736613095',
            },
            {
                id: '9781562228989-OL12128395M',
                title: 'Mist & Stone',
                author: 'Maggie Sansone',
                firstPublication: 1998,
                isbn: '9781562228989',
            },
            {
                id: '0886465303-OL384448M',
                title: 'Irish mist',
                author: 'Andrew M. Greeley',
                image: 'http://covers.openlibrary.org/b/id/4528713-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/4528713-S.jpg',
                firstPublication: 1999,
                isbn: '0886465303',
            },
            {
                id: '9780833505231-OL3502987M',
                title: 'Gorillas in the Mist',
                author: 'Dian Fossey',
                image: 'http://covers.openlibrary.org/b/id/4279855-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/4279855-S.jpg',
                firstPublication: 1983,
                isbn: '9780833505231',
            },
            {
                id: '143045122X-OL529948M',
                title: 'Children of the mist',
                author: 'Eden Phillpotts',
                image: 'http://covers.openlibrary.org/b/id/2757686-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/2757686-S.jpg',
                firstPublication: 1899,
                isbn: '143045122X',
            },
            {
                id: '9781419168574-OL6690382M',
                title: 'The land of mist',
                author: 'Arthur Conan Doyle',
                image: 'http://covers.openlibrary.org/b/id/4856211-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/4856211-S.jpg',
                firstPublication: 1926,
                isbn: '9781419168574',
            },
            {
                id: '9780747570141-OL9560763M',
                title: 'Red Mist',
                author: "Conor O'Callaghan",
                image: 'http://covers.openlibrary.org/b/id/1391153-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/1391153-S.jpg',
                firstPublication: 2004,
                isbn: '9780747570141',
            },
            {
                id: '0373010796-OL25435392M',
                title: 'Highland mist',
                author: 'Rose Burghley',
                image: 'http://covers.openlibrary.org/b/id/7268091-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/7268091-S.jpg',
                firstPublication: 1962,
                isbn: '0373010796',
            },
            {
                id: '061356927X-OL35271M',
                title: 'Mountain mists',
                author: 'Evelyn Lee',
                image: 'http://covers.openlibrary.org/b/id/1911388-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/1911388-S.jpg',
                firstPublication: 1999,
                isbn: '061356927X',
            },
            {
                id: '9781590331361-OL381979M',
                title: 'Lethal Mists',
                author: 'Eric R. Taylor',
                image: 'http://covers.openlibrary.org/b/id/1889515-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/1889515-S.jpg',
                firstPublication: 1998,
                isbn: '9781590331361',
            },
            {
                id: '0373651120-OL9545589M',
                title: 'Night Mist',
                author: 'Helen R. Myers',
                image: 'http://covers.openlibrary.org/b/id/6544517-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/6544517-S.jpg',
                firstPublication: 1993,
                isbn: '0373651120',
            },
            {
                id: '9780060925628-OL1745740M',
                title: 'Cherokee Mist',
                author: 'Jimi Hendrix',
                firstPublication: 1993,
                isbn: '9780060925628',
            },
            {
                id: '9781250768117-OL28206491M',
                title: 'The Mist',
                author: 'Ragnar Jonasson,Amanda Redman',
                image: 'http://covers.openlibrary.org/b/id/10081429-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/10081429-S.jpg',
                firstPublication: 2020,
                isbn: '9781250768117',
            },
            {
                id: '9789799898760-OL23976930M',
                title: 'Deadly mist',
                author: 'Jerry D. Gray',
                firstPublication: 2009,
                isbn: '9789799898760',
            },
            {
                id: '1770096647-OL24008948M',
                title: "Blood's mist",
                author: 'D. R. Donald',
                firstPublication: 2009,
                isbn: '1770096647',
            },
            {
                id: '9780786115730-OL13571369M',
                title: 'Rainbow in the Mist',
                author: 'Phyllis A. Whitney',
                image: 'http://covers.openlibrary.org/b/id/7298716-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/7298716-S.jpg',
                firstPublication: 1989,
                isbn: '9780786115730',
            },
            {
                id: '9781593600419-OL6703087M',
                title: 'Lud-in-the-Mist',
                author: 'Hope Mirrlees',
                image: 'http://covers.openlibrary.org/b/id/854519-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/854519-S.jpg',
                firstPublication: 1926,
                isbn: '9781593600419',
            },
            {
                id: '070896026X-OL7888925M',
                title: 'Stars Through the Mist',
                author: 'Betty Neels',
                image: 'http://covers.openlibrary.org/b/id/221872-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/221872-S.jpg',
                firstPublication: 1957,
                isbn: '070896026X',
            },
            {
                id: '9781401285814-OL22857899M',
                title: 'Season of Mists',
                author: 'Neil Gaiman',
                image: 'http://covers.openlibrary.org/b/id/797933-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/797933-S.jpg',
                firstPublication: 1992,
                isbn: '9781401285814',
            },
            {
                id: '1408976242-OL29740694M',
                title: 'Misted Cliffs',
                author: 'Catherine Asaro',
                firstPublication: 2011,
                isbn: '1408976242',
            },
            {
                id: '1460362667-OL29706588M',
                title: 'Night Mist',
                author: 'Helen R. Myers',
                firstPublication: 2014,
                isbn: '1460362667',
            },
            {
                id: '0977002551-OL27679483M',
                title: 'Morning Mist',
                author: 'Barbie Loflin',
                image: 'http://covers.openlibrary.org/b/id/9019967-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/9019967-S.jpg',
                firstPublication: 2010,
                isbn: '0977002551',
            },
            {
                id: '0913666009-OL5609223M',
                title: 'Northern mists',
                author: 'Carl Ortwin Sauer',
                firstPublication: 1968,
                isbn: '0913666009',
            },
            {
                id: '9780843934700-OL20318486M',
                title: "Rapture's mist",
                author: 'Cinnamon Burke',
                image: 'http://covers.openlibrary.org/b/id/3866334-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/3866334-S.jpg',
                firstPublication: 1993,
                isbn: '9780843934700',
            },
            {
                id: '9780843939798-OL9645451M',
                title: 'Savage mists',
                author: 'Cassie Edwards',
                image: 'http://covers.openlibrary.org/b/id/4997842-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/4997842-S.jpg',
                firstPublication: 1992,
                isbn: '9780843939798',
            },
            {
                id: '1840244011-OL9887986M',
                title: 'Red Mist',
                author: 'Geoff Thompson',
                image: 'http://covers.openlibrary.org/b/id/2013670-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/2013670-S.jpg',
                firstPublication: 2003,
                isbn: '1840244011',
            },
            {
                id: '0671014714-OL24518344M',
                title: 'The mist',
                author: 'Dean Wesley Smith,Kristine Kathryn Rusch',
                image: 'http://covers.openlibrary.org/b/id/403670-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/403670-S.jpg',
                firstPublication: 1998,
                isbn: '0671014714',
            },
            {
                id: '9780783894287-OL3667444M',
                title: 'White mist',
                author: 'Jaclyn Reding',
                image: 'http://covers.openlibrary.org/b/id/292663-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/292663-S.jpg',
                firstPublication: 2000,
                isbn: '9780783894287',
            },
            {
                id: '9781575450711-OL8744800M',
                title: 'Ruin Mist',
                author: 'Robert Stanek',
                image: 'http://covers.openlibrary.org/b/id/1928683-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/1928683-S.jpg',
                firstPublication: 2002,
                isbn: '9781575450711',
            },
            {
                id: '0440154642-OL7517834M',
                title: 'Moonlight Mist',
                author: 'Laura London,Sharon and Tom Curtis,Robin James',
                image: 'http://covers.openlibrary.org/b/id/8354601-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/8354601-S.jpg',
                firstPublication: 1979,
                isbn: '0440154642',
            },
            {
                id: '9780765369093-OL27968065M',
                title: 'Irish Mist',
                author: 'Andrew M. Greeley',
                image: 'http://covers.openlibrary.org/b/id/9356496-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/9356496-S.jpg',
                firstPublication: 1999,
                isbn: '9780765369093',
            },
            {
                id: '9781462412563-OL28102790M',
                title: 'Starlite Mist',
                author: 'Stefanie Jean Scott',
                firstPublication: 2020,
                isbn: '9781462412563',
            },
            {
                id: '9781408702345-OL28235332M',
                title: 'Red mist',
                author: 'Patricia Daniels Cornwell',
                image: 'http://covers.openlibrary.org/b/id/10166025-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/10166025-S.jpg',
                firstPublication: 2011,
                isbn: '9781408702345',
            },
            {
                id: '0571315577-OL28532604M',
                title: 'Pink Mist',
                author: 'Owen Sheers',
                image: 'http://covers.openlibrary.org/b/id/8898546-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/8898546-S.jpg',
                firstPublication: 2014,
                isbn: '0571315577',
            },
            {
                id: '0823267970-OL28802579M',
                title: "Modernity's Mist",
                author: 'Emily Rohrbach',
                firstPublication: 2015,
                isbn: '0823267970',
            },
            {
                id: '9780812558166-OL15069096M',
                title: 'Soldier of the Mist',
                author: 'Gene Wolfe',
                image: 'http://covers.openlibrary.org/b/id/10252689-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/10252689-S.jpg',
                firstPublication: 1986,
                isbn: '9780812558166',
            },
            {
                id: '9780263108262-OL14977516M',
                title: 'Season Of Mists',
                author: 'Anne Mather',
                image: 'http://covers.openlibrary.org/b/id/7321349-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/7321349-S.jpg',
                firstPublication: 1982,
                isbn: '9780263108262',
            },
            {
                id: '9780833538314-OL2406924M',
                title: 'Woman in the mists',
                author: 'Farley Mowat',
                image: 'http://covers.openlibrary.org/b/id/285440-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/285440-S.jpg',
                firstPublication: 1987,
                isbn: '9780833538314',
            },
            {
                id: '8427011563-OL4547363M',
                title: 'Swords in the Mist',
                author: 'Fritz Leiber',
                image: 'http://covers.openlibrary.org/b/id/4698181-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/4698181-S.jpg',
                firstPublication: 1977,
                isbn: '8427011563',
            },
            {
                id: '8885323081-OL17299567M',
                title: 'Egloche miste',
                author: 'Bernardino Baldi',
                firstPublication: 1992,
                isbn: '8885323081',
            },
            {
                id: '9780340320761-OL15006886M',
                title: 'Silver mist',
                author: 'Sondra Stanford',
                firstPublication: 1982,
                isbn: '9780340320761',
            },
            {
                id: '8883523081-OL18023409M',
                title: 'Egloghe miste',
                author: 'Bernardino Baldi',
                firstPublication: 1992,
                isbn: '8883523081',
            },
            {
                id: '9789668314728-OL30706634M',
                title: 'Kruhli︠a︡nsʹkyĭ mist',
                author: 'Vasilʹ Bykaŭ',
                firstPublication: 2011,
                isbn: '9789668314728',
            },
            {
                id: '5301017543-OL495422M',
                title: 'Klechalʹnyĭ mist',
                author: 'Mykola Tkach',
                firstPublication: 1995,
                isbn: '5301017543',
            },
            {
                id: '159374840X-OL12432027M',
                title: 'Irish Mist',
                author: 'Krista Janssen',
                firstPublication: 2007,
                isbn: '159374840X',
            },
            {
                id: '9781401082246-OL11589997M',
                title: 'Meadow Mist',
                author: 'Xavier Nelson',
                image: 'http://covers.openlibrary.org/b/id/2737177-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/2737177-S.jpg',
                firstPublication: 2002,
                isbn: '9781401082246',
            },
            {
                id: '9780671527877-OL7649495M',
                title: 'Carolina Mist',
                author: 'Mariah Stewart',
                image: 'http://covers.openlibrary.org/b/id/406027-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/406027-S.jpg',
                firstPublication: 1996,
                isbn: '9780671527877',
            },
            {
                id: '1838592660-OL29466567M',
                title: "Devil's Mist",
                author: 'Liam Moiser',
                firstPublication: 2020,
                isbn: '1838592660',
            },
            {
                id: '9780719817052-OL29551427M',
                title: 'Moorland Mist',
                author: 'Gwen Kirkwood',
                image: 'http://covers.openlibrary.org/b/id/10397082-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/10397082-S.jpg',
                firstPublication: 2015,
                isbn: '9780719817052',
            },
            {
                id: '1630780596-OL29742011M',
                title: 'Mist [1]',
                author: 'Gray PJ',
                firstPublication: 2015,
                isbn: '1630780596',
            },
            {
                id: '1553694139-OL12020226M',
                title: 'Blue Mist',
                author: 'Joan Severance',
                image: 'http://covers.openlibrary.org/b/id/2906111-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/2906111-S.jpg',
                firstPublication: 2006,
                isbn: '1553694139',
            },
            {
                id: '9780982842683-OL29068263M',
                title: 'Silver Mist',
                author: 'Martin Treanor',
                firstPublication: 2011,
                isbn: '9780982842683',
            },
            {
                id: '9781604410891-OL12558191M',
                title: 'Backdoor Mist',
                author: 'Rick Brannam',
                image: 'http://covers.openlibrary.org/b/id/2981764-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/2981764-S.jpg',
                firstPublication: 2007,
                isbn: '9781604410891',
            },
            {
                id: '084392280X-OL11550806M',
                title: 'Moscow Mists',
                author: 'Clarissa Ross',
                firstPublication: 1985,
                isbn: '084392280X',
            },
            {
                id: '9780941613705-OL11542001M',
                title: 'Black Mist',
                author: 'Avido Khahaifa',
                firstPublication: 1995,
                isbn: '9780941613705',
            },
            {
                id: '0861881680-OL18670100M',
                title: 'Sea mist',
                author: 'De Polnay, Peter',
                firstPublication: 1982,
                isbn: '0861881680',
            },
            {
                id: '9780822232803-OL27507647M',
                title: 'Bakersfield Mist',
                author: 'Stephen Sachs',
                image: 'http://covers.openlibrary.org/b/id/8964401-L.jpg',
                thumbnail: 'http://covers.openlibrary.org/b/id/8964401-S.jpg',
                firstPublication: 2015,
                isbn: '9780822232803',
            },
            {
                id: '1913359689-OL30312163M',
                title: "Dragon's Mist",
                author: 'Randy Cruts',
                firstPublication: 2020,
                isbn: '1913359689',
            },
            {
                id: '9781589613669-OL12366192M',
                title: 'Swamp Mist',
                author: 'Stephen Flynn',
                firstPublication: 2005,
                isbn: '9781589613669',
            },
            {
                id: '9780721200361-OL5726075M',
                title: 'Morning mist',
                author: 'Donald Trevor Baker',
                firstPublication: 1969,
                isbn: '9780721200361',
            },
            {
                id: '084392523X-OL8241161M',
                title: 'Blood Mist',
                author: 'Robert James',
                firstPublication: 1987,
                isbn: '084392523X',
            },
            {
                id: '0772515425-OL10969804M',
                title: 'White Mist',
                author: 'Barbara Smucker',
                firstPublication: 1985,
                isbn: '0772515425',
            },
        ];

        return books;
    } catch (err) {
        console.error(err);
        return [];
    }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { title, page = 1, page_limit = 100 },
        method,
    } = req;

    if (method !== 'GET') {
        res.status(405).end(`Method ${method} not supported`);
        return;
    }

    if (!title) {
        res.status(400).end(`Search parameter for book was not defined`);
        return;
    }

    try {
        const allBooks = await getBooks(Array.isArray(title) ? title[0] : title);
        const start = Number(page);
        const limit = Number(page_limit);
        const books = allBooks.slice((start - 1) * limit, start * limit);
        const pages = Math.ceil(allBooks.length / limit);

        res.status(200).json({ numPages: pages, books });
    } catch (err) {
        console.error(err);
        res.status(404).json({ error: 'No book not found.' });
    }
};
