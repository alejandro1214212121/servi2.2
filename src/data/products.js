// src/data/products.js

import amlodipino5x100 from "../assets/products/Amlodipino5x_100.jpeg";
import amlodipino10x100 from "../assets/products/Amlodipino10x_100.jpeg";
import amoxiSuspGenfar from "../assets/products/Amoxci_Suspension_GENFAR.jpeg";
import amoxicilinaX5Colmed from "../assets/products/Amoxicilina_x5_colmed.jpeg";
import azitromicinaDelta from "../assets/products/Azitromicina_delta.jpeg";
import bVitX50 from "../assets/products/b vit x50 procaps.jpeg";
import cefalexinaSusp from "../assets/products/cefalexinaSUSP.jpeg";
import cloranfenicolColmed from "../assets/products/Cloranfenicol_colmed.jpeg";
import clotrimazolTopica from "../assets/products/Clotrimazol_Topica_Farmioni.jpeg";
import complejoBx250 from "../assets/products/Complejob_x250.jpeg";
import diclofenacoAG from "../assets/products/DiclofenacoAG.jpeg";
import femduoProcaps from "../assets/products/Femduo_procaps.jpeg";
import fluconazolNova from "../assets/products/Fluconazol_nova.jpeg";
import komilon from "../assets/products/Komilon.jpeg";
import levotiroxina50 from "../assets/products/Levotiroxina_50mcg_x150.jpeg";
import losartanExpo from "../assets/products/Losarta_expo.jpeg";
import metatitane from "../assets/products/Metatitane.jpeg";
import metronidazolX100 from "../assets/products/Metronidazol_x100_ecar.jpeg";
import mileterosJbeNinos from "../assets/products/Mieltertos_jbe_niños.jpeg";
import mileterosJbeAdultos from "../assets/products/Mieltertos_jbe_adultos.jpeg";
import mioflex100 from "../assets/products/Mioflex_100.jpeg";
import muwettsProcaps from "../assets/products/Muvetts_procaps.jpeg";
import omeprazolX30 from "../assets/products/Omeprazol_x30.jpeg";
import omeprazolX100 from "../assets/products/Omeprazol_x100.jpeg";
import quetiapinaGenfar from "../assets/products/Quetiapina_genfar.jpeg";
import rifamicinaMkj from "../assets/products/Rifamicina_mkj.jpeg";
import tiaminaX250 from "../assets/products/Tiamina_x250ecar.jpeg";
import vitaminaD3_1000 from "../assets/products/Vitamina_d3_1000 UI_Colmed.jpeg";
import vitaminaD3_2000 from "../assets/products/Vitamina_d3_2000 ui_Colmed.jpeg";
import vitaminaE400 from "../assets/products/Vitamina_e_400 ui_Colmed.jpeg";

export const products = [
  { id: 1,  name: "Acetaminofén 500mg" },
  { id: 2,  name: "Ibuprofeno 400mg" },
  { id: 3,  name: "Loratadina 10mg" },
  { id: 4,  name: "Omeprazol 20mg",      image: omeprazolX30 },
  { id: 5,  name: "Amoxicilina 500mg",   image: amoxicilinaX5Colmed },
  { id: 6,  name: "Diclofenaco",         image: diclofenacoAG },
  { id: 7,  name: "Naproxeno" },
  { id: 8,  name: "Vitamina C" },
  { id: 9,  name: "Complejo B",          image: complejoBx250 },
  { id: 10, name: "Cetirizina" },
  { id: 11, name: "Azitromicina",        image: azitromicinaDelta },
  { id: 12, name: "Losartán",            image: losartanExpo },
  { id: 13, name: "Metformina" },
  { id: 14, name: "Atorvastatina" },
  { id: 15, name: "Enalapril" },
  { id: 16, name: "Salbutamol" },
  { id: 17, name: "Fluconazol",          image: fluconazolNova },
  { id: 18, name: "Aciclovir" },
  { id: 19, name: "Albendazol" },
  { id: 20, name: "Hidroxizina" },
  { id: 21, name: "Ranitidina" },
  { id: 22, name: "Prednisolona" },
  { id: 23, name: "Dexametasona" },
  { id: 24, name: "Aspirina" },
  { id: 25, name: "Meloxicam" },
  { id: 26, name: "Tramadol" },
  { id: 27, name: "Clorfeniramina" },
  { id: 28, name: "Mebendazol" },
  { id: 29, name: "Carbamazepina" },
  { id: 30, name: "Levotiroxina",        image: levotiroxina50 },
  { id: 31, name: "Insulina NPH" },
  { id: 32, name: "Furosemida" },
  { id: 33, name: "Warfarina" },
  { id: 34, name: "Amlodipino",          image: amlodipino5x100 },
  { id: 35, name: "Bisoprolol" },
  { id: 36, name: "Clopidogrel" },
  { id: 37, name: "Gabapentina" },
  { id: 38, name: "Pregabalina" },
  { id: 39, name: "Ketoconazol" },
  { id: 40, name: "Metronidazol",        image: metronidazolX100 },
  { id: 41, name: "Nitrofurantoína" },
  { id: 42, name: "Ciprofloxacino" },
  { id: 43, name: "Levofloxacino" },
  { id: 44, name: "Moxifloxacino" },
  { id: 45, name: "Clindamicina" },
  { id: 46, name: "Tobramicina" },
  { id: 47, name: "Gentamicina" },
  { id: 48, name: "Amikacina" },
  { id: 49, name: "Eritromicina" },
  { id: 50, name: "Doxiciclina" },

  // Productos adicionales con imagen, sin coincidencia clara en tu lista original
  { id: 51, name: "Amlodipino 10mg",          image: amlodipino10x100 },
  { id: 52, name: "Amoxicilina Suspensión",   image: amoxiSuspGenfar },
  { id: 53, name: "Vitamina B Complex x50",   image: bVitX50 },
  { id: 54, name: "Cefalexina Suspensión",    image: cefalexinaSusp },
  { id: 55, name: "Cloranfenicol",            image: cloranfenicolColmed },
  { id: 56, name: "Clotrimazol Tópico",       image: clotrimazolTopica },
  { id: 57, name: "Femduo",                   image: femduoProcaps },
  { id: 58, name: "Komilon",                  image: komilon },
  { id: 59, name: "Metatitane",               image: metatitane },
  { id: 60, name: "Jarabe para la tos (niños)",    image: mileterosJbeNinos },
  { id: 61, name: "Jarabe para la tos (adultos)",  image: mileterosJbeAdultos },
  { id: 62, name: "Mioflex 100",               image: mioflex100 },
  { id: 63, name: "Muwetts",                   image: muwettsProcaps },
  { id: 64, name: "Omeprazol x100",            image: omeprazolX100 },
  { id: 65, name: "Quetiapina",                image: quetiapinaGenfar },
  { id: 66, name: "Rifamicina",                image: rifamicinaMkj },
  { id: 67, name: "Tiamina x250",              image: tiaminaX250 },
  { id: 68, name: "Vitamina D3 1000 UI",       image: vitaminaD3_1000 },
  { id: 69, name: "Vitamina D3 2000 UI",       image: vitaminaD3_2000 },
  { id: 70, name: "Vitamina E 400 UI",         image: vitaminaE400 },
];