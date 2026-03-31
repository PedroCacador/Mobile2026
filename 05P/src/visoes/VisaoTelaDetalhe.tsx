import React from 'react';
import { View, Text } from 'react-native';

export default function TelaDetalhe({ route }: any) {
    const { item } = route.params;

    return (
        <View>
            <Text>Detalhe do Item:</Text>
            <Text>{item.nome}</Text>
        </View>
    );
}
