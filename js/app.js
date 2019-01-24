let myChart = document.getElementById('myChart').getContext('2d');

let barChart = new Chart(myChart, {
    type:'bar',
    data:{
        labels:['HTML','CSS','SASS','MATERIALIZE CSS','BOOTSTRAP','JAVA SCRIPT','JQUERY','ANGULAR 6'],
        datasets :[{
            label:'Skills',
            data:[
                95,
                91,
                67,
                94,
                87,
                85,
                79,
                78
            ],
        }]
    },
    options:{

    }
})