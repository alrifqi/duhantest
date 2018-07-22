<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th v-for="title in theadData" :key="title.id">
            {{ title }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="data in tbodyData" :key="data.id">
          <td v-for="title in theadData" :key="title.id" v-if="title == index">
            {{ data[title] }}
          </td>
          <td> a </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableComp',
  props: {
    theadData: {
      type: Array,
      default: () => []
    },
    tbodyData: {
      type: Array,
      default: () => []
    }
  }
}
</script>
