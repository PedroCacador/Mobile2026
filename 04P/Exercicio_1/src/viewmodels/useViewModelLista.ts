import { useState, useEffect } from 'react';
import { instanciaServicoItem } from '../servicos/ServicoItem';
import { Item } from '../modelos/Item';

export function useViewModelLista() {
  const [itens, setItens] = useState<Item[]>([]);
  const [textoEntrada, setTextoEntrada] = useState<string>('');
  const [mensagemErro, setMensagemErro] = useState<string>('');

  useEffect(() => {
    setItens(instanciaServicoItem.obterItens());
  }, []);

  const lidarComAdicionarItem = () => {
    try {
      setMensagemErro(''); 
      
      instanciaServicoItem.adicionarItem(textoEntrada);
      
      setItens(instanciaServicoItem.obterItens());
      setTextoEntrada('');
    } catch (erro) {
      if (erro instanceof Error) {
        setMensagemErro(erro.message);
      } else {
        setMensagemErro('Ocorreu um erro desconhecido.');
      }
    }
  };
  const lidarComRemoverItem = (id: string) => {
    instanciaServicoItem.removerItem(id);
    setItens(instanciaServicoItem.obterItens());
  }
  return {
    itens,
    textoEntrada,
    setTextoEntrada,
    mensagemErro,
    lidarComAdicionarItem,
    lidarComRemoverItem
  };
}


