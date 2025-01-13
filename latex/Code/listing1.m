@SystemDesc(appName="Courseman",
    dsDesc = @DSDesc(type="postgresql",
        dsUrl = "http://dataserver:5432/courseman",
        user = "admin", password = "password",
        dsmType = DSM.class, domType = DOM.class,
        osmType = OSM.class, connType=Client),
    orgDesc = @OrgDesc(name = "Department of IT",
        address = "Hanoi, Vietnam", logo = "deptit.png",
        url = "https://swinburne-vn.edu.vn"),
    modules = { ModuleMain.class, ModuleAdress.class, ModuleCourseModule.class, ModuleEnrolment.class, ModuleStudent.class })
public class SCCCourseMan { }