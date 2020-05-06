<template>
  <div class="members">
    <form action="">
       <input v-model.lazy="searchQuery" placeholder="Search for Members">
      <button @click="searchMembers(members,searchQuery)">search</button>
    
    </form>
    <button @click="sortMembers(members)">...........................</button>
    <p>{{out}}</p>
    <table v-if="!searchQuery" class="myTable">
      <tbody v-if="!searchQuery">
        <tr  v-for="(k,v) in members" :key="(k,v)">
          <th>{{v}}</th>
          <td v-for="p in k" :key="p" scope="row">{{p}}</td>
        </tr>
      </tbody>
    </table>

    <table v-else>
      
      <tbody>
      
        <tr  v-for="(k,v) in out" :key="(k,v)">
          <th>{{v}}</th>
          <td v-for="p in k" :key="p" scope="row">{{p}}</td>
        </tr>
        
      </tbody>
      
    </table>
    
    
    

    
    
  </div>
</template>

<script>//use https://github.com/typicode/json-server
import json from '../Members.json'
export default {
  name: 'members',
  data() {
    return {
      members: json,
      searchQuery: "",
      out: null,
     
    }
  },
  methods: {
    sortMembers: function(o) {
      var arr = Object.entries(o)
      arr.forEach(element => {
        var pArr = Object.values(o);
        
        console.write(element,pArr);
        
      });
      console.log(arr);
      this.out = arr;
    },

    searchMembers: function (obj,query) {
      var found = false;
      for (var mem in obj) {
        if(query == mem){
          var a = {
            "Events": {
              "event1": "Crowsh",
              "event2": "Chase",
              "event3": "Frisby",
              "event4": "Whitev",
              "event5": "Berners",
              "event6": "Sandhur",
              "events": "???",
              "total": "Total"
            }
          }
            a[mem]=obj[mem];
          }
          else {
            found = false;
          }

          this.out = a;
        }
        if (!found) {
            alert("notfound");
          
        }


      }
    },
  }
    

  
</script>

<style lang="scss">
.members {
  height: 200vh;
  color: #eee;
}
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