"use strict"
var Secuencia = require('@ull-andrea-carlos/secuencia');
/**
 * Proyecto: Comparador de secuencias.
 *
 * Función que define la operación igual que se podrá realizar entre secuencias
 * @param {Secuencia} sec1
 * @param {Secuencia} sec2
 */
var Igual = function(sec1, sec2)
{
  var secuencia = [];
  var i, j;
  var txt ="";
  for(i = 0; i < sec1.length; i++)
  {
    for(j=0; j< sec2.length; j++)
    {
      if(sec1[i] == sec2[j])
      {
        var x = 0;
        var a = 0;
        for(x = 0; x < secuencia.length; x++)
        {
          if(secuencia[x] == sec1[i]) a++;
        }
        if(a == 0) secuencia[secuencia.length] = sec1[i];
      }
    }
  }
  for(i = 0; i < secuencia.length ; i++)
  {
    if(i == 0) txt = txt + secuencia[i];
    else txt = txt + ', ' + secuencia[i];
  }
  return txt;
}
Secuencia.operaciones.Igual = Igual;
module.exports = Igual;
