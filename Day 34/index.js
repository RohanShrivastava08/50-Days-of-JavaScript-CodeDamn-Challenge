const transcription = (dna) => {
	const complement = {
	  'G': 'C',
	  'C': 'G',
	  'T': 'A',
	  'A': 'U'
	};
  
	return dna.split('').map(nucleotide => complement[nucleotide]).join('');
  };