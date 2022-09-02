//p: string
//r: string

function DNAStrand(dna) {
    // loop over string, creating a new string based on each char
    let rna = '';
    for(let i=0; i<dna.length; i++) {
        switch (dna[i]) {
            case 'A':
                rna += 'T';
                break;
            case 'T':
                rna += 'A';
                break;
            case 'G':
                rna += 'C';
                break;
            case 'C':
                rna += 'G';
                break;
        }
    }
    return rna;
}

console.log(DNAStrand("AAAA")) //"TTTT","String AAAA is")
console.log(DNAStrand("ATTGC")) //"TAACG","String ATTGC is")
console.log(DNAStrand("GTAT")) //"CATA","String GTAT is")  