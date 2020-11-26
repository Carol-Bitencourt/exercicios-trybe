let peça = 'cavalo';

switch (peça.toLowerCase()) {
  case 'bispo':
    console.log('Bispo: Direcionamento diagonal.');
    break;
  case 'rainha':
    console.log('Rainha: Direcionamento diagonal e horizontal.');
    break;
  case 'rei':
    console.log('Rei: Direcionamento livre.');
    break;
  case 'torre':
    console.log('Torre : Direcionamento horizontal.');
    break;
  case 'peão':
    console.log('Peão : Direcionamento frontal.');
    break;
  case 'cavalo':
    console.log('Cavalo : Direcionamento em "L"');
    break;
  default:
    console.log('Erro, peça inexistente!');
    break;
};