<template>
    <div id="about" style="color:white;">
        <p>{{dataList}}</p>
        
        <table>
           
            <thead>
                <tr  v-for="(k,v) in data" :key="(k,v)">

                    <th @click="sortMemb()" id="sideHead">{{v}}</th> <!-- side header -->
                    
                    <span v-if="v === 'Events'">
                        <th  v-for="i in k" :key="i" id="topHead">
                            <span @click="sortMemb(data[v],i)">
                                {{i}}
                            </span>
                        </th><!-- top header -->
                   </span>

                    <span v-else> 
                        <td v-for="i in k" :key="i">{{i}}</td>
                    </span>

                        



                </tr>
                <tbody>
                    <tr v-for="j in data[0]" :key="j">
                        <td>{{j}}</td>
                    </tr>
                </tbody>

            </thead>
            <ul v-for="i in sortMemb(data)" :key="i">
                <li>{{i}}</li>
            </ul>
            
        </table>
        <p>{{sortedArray(fata)}}</p>
        <table>
            <thead slot="head">
                <th>Name</th>
                <th>Age</th>
                ...
            </thead>

            <tbody slot="body" slot-scope="{data}">
                <tr v-for="row in data" :key="row.id">
                    <td>{{ row.name }}</td>
                    <td>{{ row.age }}</td>
                ...
            </tr>
        </tbody>
        </table>
    </div>
</template>
<script>
import members from '../Members.json'
export default {
    el: "about",
    data: function() {
        return {
            data: members,
            dataList: [],
            sortBy: null
          
        }
    },
    computed: {
        
    },
    methods: {
        sortMemb:function() {
            var jsObj = this.data
            var sortedArray = [];
            for(var i in jsObj)
            {
                // Push each JSON Object entry in array by [value, key]
                sortedArray.push([jsObj[i], i]);
            }
            console.log(sortedArray);

           
        },

        sortedArray: function() {
            function compare(a, b) {
                if (a[1] < b[1])
                    return -1;
                if (a[1] > b[1])
                    return 1;
            return 0;
            }

            return this.data.sort(compare);
        }
    },            
}
</script>
<style lang="scss">
#topHead {
    background-color: blue;
}
#sideHead {
    background-color: red;
}
</style>