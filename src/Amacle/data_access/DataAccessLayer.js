const { parse } = require("path-browserify");
const QueryBuilder = require("./QueryBuilder");

class DataAccessLayer extends QueryBuilder {

  async get() {
    const result = await this.getQB()
    try{
      if( result[0]['COUNT(*)']) return parseInt( result[0]['COUNT(*)'])
     
    }catch(e){
      return result;
    }
    if(result.length==1)  return result[0];
    return result;
  }

}

module.exports = DataAccessLayer;
