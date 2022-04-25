const puppeteer = require('puppeteer');

describe('Mi primer test en puppeteer', () => {
	it('Debe abrir y cerrar el navegador', async () => {
		const browser = await puppeteer.launch({
			// headless: true hace que no se habara el navegador y que las pruebas sean
            // más rápidas, el headless: false siempre nos abre el navegador
            headless: false,
            // slowMo nos indica en cámara lenta
            slowMo: 0,
            // devtools por defecto es false, si es true nos abre el devtools en el navegador
            devtools: false,
            // defaultViewport es un objeto con las dimensioens del viewport
            defaultViewport: {
                width: 2100,
                height: 1080,
            },
            // argumentos en forma de array de la prueba
            args: [
                // '--window-size=1920,1080', // tamaño de la ventana
            ],
            // máximiza el viewport de la página al tamaño de la ventana
            defaultViewport: null,
		});
		const page = await browser.newPage();
		await page.goto('https://platzi.com/home');
		await page.waitForTimeout(5000);
		await browser.close();
	}, 10000);
});