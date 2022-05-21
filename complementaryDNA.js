// This is the link of this JavaScript Challenge
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function DNAStrand(dna){
  //your code here
  compDNA = []
  if(dna == null){
    console.log(dna)
    return dna
  }

  // dnaStrand = ['A','T','G','C']
  for(i=0; i<=dna.length-1; i++){
      if(dna[i] == 'A'){
      compDNA.push('T')
      } else if(dna[i] == 'C'){
      compDNA.push('G')
      } else if(dna[i] == 'T'){
      compDNA.push('A')
      } else if(dna[i] == 'G'){
      compDNA.push('C')
      } else {
      return console.log('Invalid DNA')
    }
  }
  console.log(compDNA)
}
DNAStrand([])
console.log('=====')
DNAStrand(['A','T','G','C'])
console.log('=====')
DNAStrand(['G','T','A','T'])
console.log('=====')
DNAStrand(['A','A','A','A'])
console.log('=====')