export const VerifyUser = async () => {
    const url = "https://nft-collect.testnet.crypto.gesoten.com/?v=22023b81-faab-4d42-882d-95bfd86d2f52";
    // const url = new URL(url_v);
    const v = url.searchParams
      .get('v')
      .replace(/[{}]/g, '');
    console.log(v);
    console.log(`https://suser.gesoten.com/s/api/game_nft/user_data?verifier=${v}`);
    return v;
}