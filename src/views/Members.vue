<template>
  <div class="members">
    
    <button @click="MemberSort(members,event)">ass</button>

    <form action="">
      <input v-model.lazy="searchQuery" placeholder="Search for Members">
      <button @click="searchMembers(members,searchQuery)">search</button>
    </form>
    
    <table v-if="!searchQuery" class="searchable" id="myTable">
      <thead>

        <tr  v-for="(k,v) in members" :key="(k,v)">
          <th>
              {{v}}
          </th>

          <td v-for="p in k" :key="p" scope="row" class="points">
            <span @click="sortMembs(members,sortBy)">{{p}}</span>
            
          </td>
        </tr>
      </thead>

    </table>

    <table v-else>
      <thead>
        <tr v-for="(k,v) in searchMembers(members,searchQuery)" :key="(k,v)">
          <th>{{v}}</th>
          <td v-for="p in k" :key="p">
            {{p}}
          </td>
        </tr>
      </thead>
    </table>

 
    
  </div>
</template>

<script>//use https://github.com/typicode/json-server
import json from '../Members.json'

export default {
  name: 'members',
  
  data: function() {
    return {
      members: json,
      searchQuery: "",
      out: [],
      sortBy: null
     
     
    }
  },
  
  
  
  methods: {
  

    searchMembers: function (obj,query) {
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
          this.out = a;
        }
    },
    MemberSort: function(obj,event) {
      console.log("a",obj,event)
    }
  }
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






</style>
{
    "Events": {
        "Crowsh": "Crowsh",
        "event2": "Chase",
        "event3": "Frisby",
        "event4": "Whitev",
        "event5": "Berners",
        "event6": "Sandhur",
        "events": "???",
        "total": "Total"

    },
    "Ovidijus Blankas": {
        "Crowsh": 6,
        "Chase": 0,
        "Frisby": 0,
        "Whitev": 0,
        "Berners": 0,
        "Sandhur": 0,
        "???": 0,
        "total": "6-12"
    },
    "Modestas Druktenis": {
        "Crowsh": 6,
        "Chase": 0,
        "Frisby": 0,
        "Whitev": 0,
        "Berners": 0,
        "Sandhur": 0,
        "???": 0,
        "total": "6-12"
    },
    "Marius Gavrilovas": {
        "points1": 13,
        "Chase": 0,
        "Frisby": 0,
        "Whitev": 0,
        "Berners": 0,
        "Sandhur": 0,
        "Crowsh": 0,
        "???": 0,

        "total": "13"
    },
    "Aurimas Belickas": {
        "points1": 2,
        "Chase": 0,
        "Frisby": 0,
        "Whitev": 0,
        "Berners": 0,
        "Sandhur": 0,
        "Crowsh": 0,
        "???": 0,

        "total": "2"
    },
    "Mantas Kasparavicius": {
        "points1": 6,
        "Chase": 10,
        "Frisby": 20,
        "Whitev": 0,
        "Berners": 0,
        "Sandhur": 0,
        "Crowsh": 0,
        "total": "6-12"
    },
    "Rimvis Patasius": [4, 0, 0, 0, 0, 0, 0, "4"],
    "Andrius Mazeika": [2, 0, 0, 0, 0, 0, 0, "2"],
    "Airis Gerikas": [6, 0, 0, 0, 0, 0, 0, "6-12"],
    "Antanas Cerneckis": [6, 0, 0, 0, 0, 0, 0, "6-12"],
    "Dimitrij Ivanov": [6, 0, 0, 0, 0, 0, 0, "6-12"],
    "Genadij Narkevic": [6, 0, 0, 0, 0, 0, 0, "6-12"],
    "Arturas Orlas": [6, 0, 0, 0, 0, 0, 0, "6-12"],
    "Egis stanys": [1, 0, 0, 0, 0, 0, 0, "1"],
    "Mindas St": [4, 0, 0, 0, 0, 0, 0, "4"],
    "Aurimas Rackaukas": [3, 0, 0, 0, 0, 0, 0, "3"],
    "Aivaras Poskus": [13, 0, 0, 0, 0, 0, 0, "13"],
    "Ramunas Busma": [6, 0, 0, 0, 0, 0, 0, "6-12"],
    "Lukas Balkus": [6, 0, 0, 0, 0, 0, 0, "6-12"],
    "Martynas ZX": [6, 0, 0, 0, 0, 0, 0, "6-12"],
    "Edvinas Fomkinas": [6, 0, 0, 0, 0, 0, 0, "6-12"],
    "Arturas Panucci": [1, 0, 0, 0, 0, 0, 0, "1"],
    "Vidmantas Andzelys": [6, 0, 0, 0, 0, 0, 0, "6-12"],
    "Mindaugas Slatkevicius": [6, 0, 0, 0, 0, 0, 0, "6-12"],
    "Kestutis Jarasiunas": [5, 0, 0, 0, 0, 0, 0, "5"],
    "Kastytis Barcis ": [5, 0, 0, 0, 0, 0, 0, "5"],
    "Raimis Kaspa": [3, 0, 0, 0, 0, 0, 0, "3"]

}