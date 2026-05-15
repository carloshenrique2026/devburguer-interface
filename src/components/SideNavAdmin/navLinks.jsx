import { List, ListPlus, Receipt } from "@phosphor-icons/react";

export const navLinks = [
    {
        id: 1,
        label: 'Pedidos',
        path: '/admin/pedidos',
        Icon: <Receipt />
    },
        {
        id: 2,
        label: 'Produtos',
        path: '/admin/produtos',
        Icon: <List />
    },
        {
        id: 3,
        label: 'Adicionar Produto',
        path: '/admin/novo-produto',
        Icon: <ListPlus />
    },
];