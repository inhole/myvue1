<template>
  <table>
    <tr-component v-for="(rowData, index) in tableData" :key="index" :row-data="rowData" :row-index="index"></tr-component>
  </table>
</template>

<script>
  import TrComponent from './TrComponent';
  export default {
    props: {
      tableData: Array, // TicTacToe.vue 에서 받은 tableData prop 선언
    },
    components: { // 자식 컴포넌트
      TrComponent,
    },
  };
</script>