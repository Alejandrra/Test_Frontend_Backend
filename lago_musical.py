
#Cuando se le da brr debe reproducir fiu, cric-cric, brrah de acuerdo con la primera canción.
#Cuando se le da birip, debe reproducir trri-trri, croac según la segunda canción.
#Cuando se le da plop debe reproducir cric-cric, brrah de acuerdo con la tercera canción.
#Cuando se le da croac o brrah, no debería reproducir nada de acuerdo con todas las canciones.

def reproduce_sonido(sonido):
    canciones = {
        "brr": ["fiu", "cric-cric", "brrah"],
        "birip": ["trri-trri", "croac"],
        "plop": ["cric-cric", "brrah"]
    }

    for cancion in canciones.values():
        if sonido in cancion:
            cancion.remove(sonido)
    return canciones

# Usando los sonidos dados en el enunciado
sonido_brr = "brr"
sonidos_restante = reproduce_sonido(sonido_brr)
print("Los sonidos restantes:", sonidos_restante)

sonido_birip = "birip"
sonidos_restante = reproduce_sonido(sonido_birip)
print("Los sonidos restantes:", sonidos_restante)

sonido_plop = "plop"
sonidos_restante = reproduce_sonido(sonido_plop)
print("Los sonidos restantes:", sonidos_restante)
