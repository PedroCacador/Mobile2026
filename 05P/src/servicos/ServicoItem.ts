import { Item } from '../modelos/Item';

export class ServicoItem {
    itens: Item[];

    constructor() {
        this.itens = [];
    }

    removerItem(id: string): void {
        this.itens = this.itens.filter((item) => item.id !== id);
    }

    adicionarItem(nome: string): Item {
        if (!nome || nome.trim().length <= 2) {
            throw new Error('O nome do item deve ter mais de 2 caracteres.');
        }

        const nomeTratado = nome.trim();

        const existe = this.itens.some(
            (item) => item.nome.toLowerCase() === nomeTratado.toLowerCase()
        );

        if (existe) {
            throw new Error('Já existe um item com esse nome na lista.');
        }

        const novoItem = new Item(Date.now().toString(), nomeTratado);
        this.itens.push(novoItem);

        return novoItem;
    }

    obterItens(): Item[] {
        return [...this.itens];
    }
}

export const instanciaServicoItem = new ServicoItem();
