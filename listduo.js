function ListaDupEncadeada(value) {
    function Element(val) {
        this.chave = val;
        this.proximo = null;
        this.prev = null;
    }
    
    this.primeiro = new Element(value);
    this.add = function (valor) {
        if (this.primeiro != null) {
            var ponteiro = this.primeiro;
            do {
                if (ponteiro.proximo == null) {
                    ponteiro.proximo = new Element(valor);
                    ponteiro.proximo.prev = ponteiro;
                    return "Valor " + valor + " aplicado a lista";
                    break;
                } else {
                    ponteiro = ponteiro.proximo;
                }
            } while (ponteiro != null);
        } else {
            this.primeiro = new Element(valor);
            return "Valor " + valor + " aplicado a lista";
        }
    }

    this.busca = function (valor) {
        var ponteiro = this.primeiro;
        do {
            if (pointer.chave != valor) {
                ponteiro = ponteiro.proximo;
            } else {
                break;
            }
        } while (ponteiro != null);
        return ponteiro;
    }

    this.remove = function (valor) {
        var busca = this.busca(valor);
        if (busca == null) {
            return "Valor não existe";
        } 
        else if (busca == this.primeiro) {
            if (busca.proximo != null) {
                var prox = busca.proximo;
                busca.chave = prox.chave;

                if (prox.proximo != null) {
                    prox.proximo.prev = busca;
                }
                busca.proximo = prox.proximo;
                prox=null;
                return "Remoção do primeiro retirada com sucesso";
            } else {
                this.primeiro=null;
                return "Remoção Concluida";
            }
        } 
        else if (busca.proximo == null)
        {
            busca.prev.proximo = null;
            busca = null;
            return "Remoção do final feita com sucesso";
        }  
        else {
            busca.proximo.prev = busca.prev;
            busca.prev.proximo = busca.proximo;
            busca=null;
            return "Remoção do meio Concluida com sucesso";
        }
    }
}