public class Main {

	public static void main(String[] args) {
		

		System.out.println("::::::: Teste 1 :::::::");
		testarExcecoesDoCarro();
		System.out.println("::::::: Teste 2 :::::::");
		testarExcecoesDoAviao();
		System.out.println("::::::: Teste 3 :::::::");
		testarExcecoesDoAviaoNumCarro();
		
		// podemos alterar ao valor de minAbcissa na iAnda?
		// iAnda.minAbcissa = 3;
	}

	public static void testarExcecoesDoCarro() {
		Carro c = new Carro(1);

		char movimento = 'r'; // supor que foi perguntado ao utilizador...
		int distancia = 5; // supor que foi perguntado ao utilizador...

		try {
			switch (movimento) { 
			case 'a':
				c.avancar(distancia);
				break;
			case 'r':
				c.recuar(distancia);
				break;
			default:
				break;
			}