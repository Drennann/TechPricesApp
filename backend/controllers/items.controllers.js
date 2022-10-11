import { chromium } from "playwright";

//https://www.insumosacuario.com.ar/buscar/?q=monitor+240hz

//React issues / problems: ARMYTECH, Gaming City, GoldenTech Store, hard vision precio 0 problem

//Buscadores Malos: CompuGarden, HF Tecnologia

const pages = [
  {
    name: "Acuario Insumos",
    url: "https://www.insumosacuario.com.ar/buscar/",
    getData: async (page, id) => {
      const finalId = id.split(" ").join("+");
      await page.goto("https://www.insumosacuario.com.ar/buscar/?q=" + finalId);
      const items = await page.$$(".prod-cat");
      const imgs = await page.$$(".prod-cat a");

      const response = [];

      for (let i = 0; i < items.length; i++) {
        const precio = await items[i].getAttribute("data-precio");
        const nombre = await items[i].getAttribute("data-nombre");
        const link = await imgs[i].getAttribute("href");
        response.push({
          nombre,
          precio,
          link,
          tienda: "Acuario Insumos",
        });
      }
      return response;
    },
  },
  {
    name: "Binary Store",
    url: "https://www.binarystore.com.ar/buscar/?q=",
    getData: async (page, id) => {
      const finalId = id.split(" ").join("+");
      await page.goto("https://www.binarystore.com.ar/buscar/?q=" + finalId);
      const items = await page.$$(".prod-cat");
      const imgs = await page.$$(".prod-cat a img");
      const links = await page.$$(".prod-cat a");

      const response = [];

      for (let i = 0; i < items.length; i++) {
        const precio = await items[i].getAttribute("data-precio");
        const nombre = await items[i].getAttribute("data-nombre");
        const img = await imgs[i].getAttribute("src");
        const link = await links[i].getAttribute("href");
        response.push({
          nombre,
          precio,
          img,
          link,
          tienda: "Binary Store",
        });
      }

      return response;
    },
  },
  {
    name: "Compu Todo",
    url: "https://www.computodo.com.ar/buscar/?q=240hz",
    getData: async (page, id) => {
      const finalId = id.split(" ").join("+");
      await page.goto("https://www.computodo.com.ar/buscar/?q=" + finalId);
      const items = await page.$$("#load-articulos .listado-");
      const prices = await page.$$("#load-articulos .listado- .price h4");
      //const imgs = await page.$$("#load-articulos .imagen a img");
      const links = await page.$$("#load-articulos h4 a");

      const response = [];

      for (let i = 0; i < items.length; i++) {
        const precio = await prices[i].getAttribute("data-precio");
        const nombre = await items[i].getAttribute("data-nombre");
        //const img = await imgs[i].getAttribute("src");
        const link = await links[i].getAttribute("href");
        response.push({
          nombre,
          precio,
          //img,
          link,
          tienda: "Compu Todo",
        });
      }

      return response;
    },
  },
  /*    {
        name: "Delta Gaming",
        url: "https://www.computodo.com.ar/buscar/?q=240hz",
        getData: async (page, id) => {
            await page.goto("https://www.computodo.com.ar/buscar/?q=240hz");
            const items = await page.$$('#load-articulos .listado-');
            const prices = await page.$$("#load-articulos .listado- .price h4");
            //const imgs = await page.$$("#load-articulos .imagen a img");
            const links = await page.$$("#load-articulos h4 a");

            const response = [];
    
            for(let i = 0; i < items.length; i++){
                const precio = await prices[i].getAttribute("data-precio");
                const nombre = await items[i].getAttribute("data-nombre");
                //const img = await imgs[i].getAttribute("src");
                const link = await links[i].getAttribute("href");
                response.push({
                    nombre,
                    precio,
                    //img,
                    link,
                    tienda: "Delta Gaming"
                })
            }
    
            products = [...products, ...response]
        }
    },*/
  {
    name: "Full H4rd",
    url: "https://www.fullh4rd.com.ar/cat/search/240hz",
    getData: async (page, id) => {
      const finalId = id.split(" ").join("%20");
      await page.goto("https://www.fullh4rd.com.ar/cat/search/" + finalId);
      const items = await page.$$(".list .product-list");
      const prices = await page.$$(".item a .info .price");
      const imgs = await page.$$(".item a .image img");
      const links = await page.$$(".list .product-list a");
      const nombres = await page.$$(".list .product-list a .info h3");

      const response = [];

      const parseToNumber = (string) => {
        let tmp = string.split(" ")[0];
        tmp = tmp.split("$")[1];
        tmp = tmp.split(",")[0];
        tmp = tmp.split(".");
        let result = "";
        for (let i = 0; i < tmp.length; i++) {
          result = result + tmp[i];
        }
        return result;
      };

      for (let i = 0; i < items.length; i++) {
        const precio = parseToNumber(await prices[i].innerHTML());
        const nombre = await nombres[i].innerHTML();
        const img = await imgs[i].getAttribute("src");
        const link = await links[i].getAttribute("href");
        response.push({
          nombre,
          precio,
          img: "https://www.fullh4rd.com.ar/" + img,
          link,
          tienda: "Full H4rd",
        });
      }

      return response;
    },
  },
  {
    name: "Gamers Point",
    url: "https://www.gamerspoint.com.ar/buscar/?q=monitor+144hz",
    getData: async (page, id) => {
      const finalId = id.split(" ").join("+");
      await page.goto("https://www.gamerspoint.com.ar/buscar/?q=" + finalId);
      const items = await page.$$("#load-articulos .listado-");
      const prices = await page.$$("#load-articulos .listado- .price h4");
      //const imgs = await page.$$("#load-articulos .imagen a img");
      const links = await page.$$("#load-articulos h4 a");

      const response = [];

      for (let i = 0; i < items.length; i++) {
        const precio = await prices[i].getAttribute("data-precio");
        const nombre = await items[i].getAttribute("data-nombre");
        //const img = await imgs[i].getAttribute("src");
        const link = await links[i].getAttribute("href");
        response.push({
          nombre,
          precio,
          //img,
          link,
          tienda: "Gamers Point",
        });
      }

      return response;
    },
  },
  /*
    {
        name: "Gaming City",
        url: "https://www.gamingcity.com.ar/240-hz",
        getData: async (page) => {

            await page.goto("https://www.gamingcity.com.ar/240-hz");
            const items = await page.$$('.ui-search-item__brand-discoverability a h2');
            const prices = await page.$$(".price-tag-text-sr-only");
            const imgs = await page.$$(".ui-search-item__brand-discoverability a img");
            const links = await page.$$("li .ui-search-result__image a");

            const response = [];
    
            for(let i = 0; i < items.length; i++){
                const precio = await prices[i].innerHTML();
                const nombre = await items[i].innerHTML();
                const img = await imgs[i].getAttribute("src");
                const link = await links[i].getAttribute("href");
                response.push({
                    nombre,
                    precio,
                    img,
                    link
                })
            }
    
            console.log(response)
        }
    },*/
  {
    name: "Gezatek",
    url: "https://www.gezatek.com.ar/tienda/?busqueda=mouse+gamer",
    getData: async (page, id) => {
      const finalId = id.split(" ").join("+");
      await page.goto("https://www.gezatek.com.ar/tienda/?busqueda=" + finalId);
      const items = await page.$$(".product h2 a");
      const prices = await page.$$(".product .w-footer h3");
      const imgs = await page.$$(".product a .figure img");
      const links = await page.$$(".product h2 a");

      const response = [];

      for (let i = 0; i < items.length; i++) {
        const precio = Math.ceil(
          Number(await prices[i].getAttribute("data-id"))
        );
        const nombre = await items[i].innerHTML();
        const img = await imgs[i].getAttribute("src");
        const link =
          "https://www.gezatek.com.ar" + (await links[i].getAttribute("href"));
        response.push({
          nombre,
          precio,
          img,
          link,
          tienda: "Gezatek",
        });
      }

      return response;
    },
  },
  /*    {
        name: "GoldenTech Store",
        url: "https://www.goldentechstore.com.ar/buscar/?q=monitor+144hz",
        getData: async (page) => {
            await page.goto("https://www.goldentechstore.com.ar/buscar/?q=monitor+144hz");
            const items = await page.$$('.load-articulos .prod-cat');
            const imgs = await page.$$(".prod-cat .imagen a img");
            const links = await page.$$(".prod-cat .imagen a");

            const response = [];
    
            for(let i = 0; i < items.length; i++){
                const nombre = await items[i].getAttribute("data-nombre");
                const precio = Math.ceil(Number(await items[i].getAttribute("data-precio")));
                const img = await imgs[i].getAttribute("src");
                const link = await links[i].getAttribute("href");
                response.push({
                    nombre,
                    precio,
                    img,
                    link
                })
            }
    
            console.log(response)
        }
    },*/
  {
    name: "Hard Digital",
    url: "https://www.hard-digital.com.ar/buscador?query=monitor+144hz",
    getData: async (page, id) => {
      const finalId = id.split(" ").join("+");
      await page.goto(
        "https://www.hard-digital.com.ar/buscador?query=" + finalId
      );
      const items = await page.$$("#grid .product .card-body p a");
      const prices = await page.$$("#grid .product .card-body .ng-binding h5");
      const imgs = await page.$$("#grid .product a img");
      const links = await page.$$("#grid .product p a");

      const response = [];

      for (let i = 0; i < items.length; i++) {
        const nombre = await items[i].innerHTML();
        const precio = await prices[i].innerHTML();
        const img = await imgs[i].getAttribute("src");
        const link = await links[i].getAttribute("href");

        let precioFinal = precio.split("$")[1];

        response.push({
          nombre,
          precio: precioFinal,
          img,
          link,
          tienda: "Hard Digital",
        });
      }

      return response;
    },
  },
  {
    name: "Hard Vision",
    url: "https://www.hardvisionlr.com.ar/buscar/?q=monitor+144hz",
    getData: async (page, id) => {
      const finalId = id.split(" ").join("+");
      await page.goto("https://www.hardvisionlr.com.ar/buscar/?q=" + finalId);
      const items = await page.$$("#load-articulos .prod-cat");
      const imgs = await page.$$("#load-articulos .prod-cat .imagen a img");
      const links = await page.$$("#load-articulos .prod-cat .imagen a");

      let response = [];

      for (let i = 0; i < items.length; i++) {
        const nombre = await items[i].getAttribute("data-nombre");
        const precio = await items[i].getAttribute("data-precio");
        const img = await imgs[i].getAttribute("src");
        const link = await links[i].getAttribute("href");
        response.push({
          nombre,
          precio,
          img,
          link,
          tienda: "Hard Vision",
        });
      }
      response = response.filter((i) => Number(i.precio) > 0);
      return response;
    },
  },
  /*{
    name: "Hard Loots",
    url: "https://hardloots.com.ar/?s=monitor+144hz&post_type=product&dgwt_wcas=1",
    getData: async (page, id) => {
      const finalId = id.split(" ").join("+");
      await page.goto(
        "https://hardloots.com.ar/?s=" +
          finalId +
          "&post_type=product&dgwt_wcas=1"
      );
      const items = await page.$$("li .un-product-details h3 a");
      const prices = await page.$$("li .un-product-details .price bdi");
      const imgs = await page.$$("li .un-product-thumbnail a img");
      const links = await page.$$("li .un-product-thumbnail a");

      const response = [];

      for (let i = 0; i < items.length; i++) {
        const nombre = await items[i].innerHTML();
        let precio = await prices[i].innerHTML();
        const img = await imgs[i].getAttribute("src");
        const link = await links[i].getAttribute("href");

        precio = precio.split(";")[1];
        precio = precio.split(",")[0];
        precio = precio.split(".");

        let precioFinal = "";

        for (let i = 0; i < precio.length; i++) {
          precioFinal = precioFinal + precio[i];
        }

        response.push({
          nombre,
          precio: precioFinal,
          img,
          link,
          tienda: "Hard Loots",
        });
      }

      return response;
    },
  },*/
];

export const getProducts = async (id) => {
  try {
    let response = [];

    const browser = await chromium.launch();
    const page = await browser.newPage();

    for (let i = 0; i < pages.length; i++) {
      let asd = await pages[i].getData(page, id);
      response = [...response, ...asd];
    }
    await page.close();
    await browser.close();

    return response;
  } catch (e) {
    console.log("error", e);
  }
};
