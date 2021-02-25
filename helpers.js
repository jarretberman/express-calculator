

const mean = (nums) =>{

    let mean = 0

    for (let x of nums){

        mean += x
    }

    mean = mean/ nums.length

    return mean

}

const median = (nums) => {

    let middle

    if(nums.length % 2 === 0){

        middle = nums.length /2

        return (nums[middle] + nums[middle-1])/2
    }

    middle = Math.floor( nums.length / 2)


    return nums[middle]
}


const mode = (nums) => {

    let mode = 0
    let numsObj = {}

    for (let x of nums){

        if (numsObj[x]){
            numsObj[x] += 1


        } else {

            numsObj[x] = 1
        }

        mode = (!numsObj[mode]) || (numsObj[x] > numsObj[mode]) ? x : mode
    }


    return mode
}

module.exports= { mean,median,mode, }