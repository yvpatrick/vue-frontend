
export default class APIRecords {
    constructor(_id, CreatedBy,Version,Swagger, apiname,dateCreated) {
      this._id = _id;
      this.CreatedBy = CreatedBy;
      this.Version=Version;
            this.Swagger = Swagger;
      this.apiname = apiname;
      this.dateCreated=dateCreated;
    }
  }