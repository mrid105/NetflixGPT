export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e6-7005-afe1-b45e545cb948/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAACUCAMAAAAOCP0eAAAAZlBMVEUNfoD///8Ae30AeHoAdXf5/PwAcnXT5eXy+Pju9fWhwsNMl5m61tfi7e0/kZK409OIuLkyi42Br7CrzM2bw8SWuLnL3997sbJfoaIfh4lnqKirx8ikysoegoUAbXBvpadEi45ZmZsnpihaAAADyElEQVR4nO3biW6jMBAGYBgbDMHmDldDCO//kmsSZXO52xSIE2n/T6raSpWHwWNjYtdxAAAAAAAAAAAAAGBFxHzmcP1lPTD3aQpMazXXdl9Jkmyafq0mn8NYW58CO6sE5nGpQs91XS8Uac9XaPFJfrxTgXsKXPfLC8JvlHshWmup7JvwEteT2eJUUs+9FjaWUmHlTVxXRcsKjIbbRKYWrQx8lt4HFvGSVChW7r0qszDsaXwMLJ0Fge+7eBKkFjLpi/su0ZYUNgse23Nl+/JUmKFLdDXs5zcYG9pz1fjykcK3psDe/KeKbyguLX/9mN8ZA8+fbPaVscGXDxRqE2PgevZA2Zuq1UYmmVw7E3ODFiavwhh4mJ0JT03tea8fJ6bZX4tnB6bM1J6FuYvlpunf4/OLgZkGStK/vLooEobAhT+/RWYor7C2sfAqH5/xwZI1JGWP83CyZPnzfODHTtktazG6ry/x+rXKhF+/nRzJhUVNze3NEbGl9xM+3qayfAnOY3lpMky4tY8l/ExcJjBVrvD6S32diNDz9Nt00pHFjyRYW1ci0IGVKMZVBicxFg/b7XbImN3PiYhRnB8Dr1cJjGt2PyI6oXcFBgAAAAAAAAAAgP8KccbecOZvdURZWglp5xTTXWSH1ovKnKg8bXzYOPtzgw5DWo/OKrnoOzKW5301r7N4eHEyVIHrhZto+Z4HsbbZXe0PVgt2f2dEP59oEmW2bMOA+W0ub/Y5lc2dKOr/ntQIVBnP3jwiTlEp7rZN1aqX+tMVXO8We2oT72ecbCC2b2sZPuzJK5vVRdHtfQxE17NfFRljrI2S+01s+yOeDg8nRDxZxz3RzzWu/4RRH6fSlMYbpi7TOaCgqsdD3zvf5TOl4Dh9NjalMB2+0cKqsfxkpIP5pJ4r5KYexuy4/aoraEqK9PfpV3J0DnWZVObOmPKQHbfcI9NI2X13QUGoZPK12dZNM8ZHTdPk+aYopAgfB/hfqhjad6y6mNMl31+VOx35V0qJI/1D8E05XTpzrX92+D2ifjAfPJyhSqMVTnosyaWRP93rJ4RF09t8rhsxdl7Czibq7DPOR5DPO8OD+ileWKU0Z3nwIsR5lFbqt2WmZ7g0os9J40S/t8Zp8XQ2elqTX7qoLB9bepK+u1mTTo+MH7JQVVIOY8s+rTeuTS/DbTTkOh+lwjDwrkZPEOrHS1WUuV4A9A59xhj/p2ltQn12iJpuSPPNSZmndTdGh0M7nYh7+4T7G8flFl1ejOnsnRcFAAAAAAAAAAAAAAAAAAAAAADwWf4AeJcqdNM233AAAAAASUVORK5CYII=";
export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/CA-en-20250721-TRIFECTA-perspective_26e23158-236f-425e-941d-3c8f37bdd62b_large.jpg";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};
export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Espagñol" },
];
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
