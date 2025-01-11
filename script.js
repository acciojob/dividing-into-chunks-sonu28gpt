const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	n=Number(n);
	let j=0;
	let ans=[];
	let temp=[];
	let sum=0;
	while(j<arr.length){
		if(arr[j]>n){
			j++;
		}
		while(j<arr.length && sum+arr[j]<=n){
			temp.push(arr[j]);
			sum+=arr[j];
			j++;
		}
		if(j>arr.length){
			if(temp.length)
			ans.push(temp);
			break;
		}
		if(temp.length);
		ans.push(temp);
		temp=[];
		sum=0;
		
	}
	// alert(ans);
	return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
