var value = 2; // ou bien 0, 1, '0', '1', '2'

// Utilisation de l'instruction if...else
if (typeof value === 'number') {
  console.log("La valeur est un nombre");
} else {
  console.log("La valeur est une chaîne de caractères");
}

// Utilisation de l'instruction switch
switch (value) {
  case 0:
  case '0':
    console.log("La valeur est égale à 0");
    break;
  case 1:
  case '1':
    console.log("La valeur est supérieure à 0");
    break;
  case 2:
  case '2':
    console.log("La valeur est supérieure à 1");
    break;
  default:
    console.log("La valeur n'est pas prise en compte");
    break;
}
