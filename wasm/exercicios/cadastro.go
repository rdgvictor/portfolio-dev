package main

import "fmt"

// A lógica de github.com/rdgvictor/SISTEMA_DE_CADASTRO, recebendo os dados prontos
// em vez de ler o teclado. Os textos e formatos são os mesmos do programa.
func resumoFilme(name string, yearRelease int, moviePrice float64) string {
	return fmt.Sprintf("O filme cadastrado é %s lançado em %d, ele custa - R$ %.2f", name, yearRelease, moviePrice)
}

func calculateAverage(notes []float64) float64 {
	numRatings := len(notes)
	var total float64
	for i := 0; i < numRatings; i++ {
		total += notes[i]
	}
	if numRatings == 0 {
		return 0
	}
	return total / float64(numRatings)
}
