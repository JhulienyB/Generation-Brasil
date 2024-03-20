programa
{
	
	funcao inicio()
	{
		inteiro vetor[10] = {2, 5, 1, 3, 4, 9, 7, 8, 10, 6}

		//Indices Impares
		escreva("Elementos nos índices ímpares:\n")
		para(inteiro i=0;i<10;i++){
			se (i % 2 != 0){
				escreva(vetor[i] + ", ")
			}
		}
		
		//Numeros Pares
		escreva("\nElementos pares:\n")
		para(inteiro i=0;i<10;i++){
			se(vetor[i] % 2 == 0){
				escreva(vetor[i] + ", ")
			}
		}
		
		//Soma
		escreva("\nSoma:\n")
		inteiro acumular=0
		para(inteiro i=0;i<10;i++){
			acumular = acumular + vetor[i]
		}
		escreva(acumular)

		//Media
		escreva("\nMédia:\n")
		inteiro media = acumular / 10
		escreva(media)
	}
	
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 633; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */