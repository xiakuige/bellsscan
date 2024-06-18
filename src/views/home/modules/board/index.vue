<template>
  <a-table :columns="columns" :data-source="dataSource" bordered/>
</template>
<script setup lang="ts">
import {ref} from "vue";


const columns = [
  {
    title: 'Height',
    dataIndex: 'height',
    width: '15%',
  },
  {
    title: 'Timestamp',
    dataIndex: 'timestamp',
    width: '15%',
  },
  {
    title: 'Transactions',
    dataIndex: 'transactions',
    width: '40%',
  },
  {
    title: 'Size(KB)',
    dataIndex: 'size',
    width: '15%',
  },
  {
    title: 'Weight(KWU)',
    dataIndex: 'weight',
    width: '15%',
  },
];

interface DataItem {
  height: string;
  timestamp: string;
  transactions: string;
  size: number;
  weight: number;
}

const data: DataItem[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    height: i.toString(),
    timestamp: `1231 ${i}`,
    transactions: `abcsdasdasdasdasdadssd`,
    size: 40,
    weight: 12
  });
}

const dataSource = ref(data);
</script>