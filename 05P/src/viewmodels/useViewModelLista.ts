import { useState, useCallback } from 'react';
import { instanciaServicoItem } from '../servicos/ServicoItem';
import { Item } from '../modelos/Item';
import { useFocusEffect } from '@react-navigation/native';

export function useViewModelLista() {
  const [itens, setItens] = useState<Item[]>([]);

  useFocusEffect(
    useCallback(() => {
      setItens(instanciaServicoItem.obterItens());
    }, [])
  );

  const lidarComRemoverItem = (id: string) => {
    instanciaServicoItem.removerItem(id);
    setItens(instanciaServicoItem.obterItens());
  };

  return {
    itens,
    lidarComRemoverItem,
  };
}