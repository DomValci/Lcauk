<template>
  <div class="events">
    <h1>This is the event page</h1>
    <table class="myTable">
      
      <tbody>
        <tr v-for="(k,v) in event" :key="(k,v)">
          <th>{{v}}</th>

          <td v-for="p in k.event" :key="p" scope="row">
          {{p}}</td>
          

        </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
import events from '../Events.json'
export default {
  name: 'events',
  data() {
    return {
      event: events
    }
  },
  
}
</script>

<style lang="scss">
table tr:first-of-type {
  background-color: gray;
}
table th:first-of-type {
  background-color: gray;
  
}


table {
  font-family: 'Arial';
  margin: 5% auto;
  border-collapse: collapse;
  border: 1px solid #eee;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.10),
     0px 10px 20px rgba(0,0,0,0.05),
     0px 20px 20px rgba(0,0,0,0.05),
     0px 30px 20px rgba(0,0,0,0.05);
 
  th, td {
    border: 1px solid #eee;
    padding: 12px 35px;
    border-collapse: collapse;
  }
  tr:hover {
    background-color: lightgray;
    td {
      color: black;
    }
  }
  tbody {
    background-color: black;
    
  }
}
</style>