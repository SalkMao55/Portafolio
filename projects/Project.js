//Object Structure form Project's Content
class Project {
  constructor(
    name,
    developer,
    date_devel,
    principal_language,
    other_technologies
  ) {
    this.name = name; //Name Proyect
    this.developer = developer; //Name Developer
    this.date_devel = date_devel; //Date Development
    this.principal_language = principal_language; //Language used
    this.other_technologies = other_technologies | ''; //Other technologies used
  }

  //Getters for properties
  get get_name() {
    return this.name;
  }

  get get_developer() {
    return this.developer;
  }

  get get_date_devel() {
    return this.date_devel;
  }

  get get_principal_language() {
    return this.principal_language;
  }

  get get_other_technologies() {
    return this.other_technologies;
  }
}
