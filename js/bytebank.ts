let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLElement;

if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString();   
}


elementoFormulario.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }

    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

    let tipoTransacao: string = inputTipoTransacao.value;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    if (tipoTransacao == "Depósito") {
        saldo += valor;
    } else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    } else {
        alert("Tipo de Transação é inválido");
        return;
    };

    elementoSaldo.textContent = saldo.toString();

    const novaTrasacao = {
        tipoTrasacao: tipoTransacao,
        valor: valor,
        data: data
    };

    console.log(novaTrasacao);
    elementoFormulario.reset();
})
