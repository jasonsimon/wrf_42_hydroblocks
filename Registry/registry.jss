# jss all of the stuff i've added

state    real  shread0              ij      misc        1         -      rh       "shread0"                   "sh in file 0"                      "m s-1"      
state    real  shread1              ij      misc        1         -      rh       "shread1"                   "sh in file 1"                      "m s-1"      
state    real  lhread0              ij      misc        1         -      rh       "lhread0"                   "lh in file 0"                      "m s-1"      
state    real  lhread1              ij      misc        1         -      rh       "lhread1"                   "lh in file 1"                      "m s-1"      
state    real  tsread0              ij      misc        1         -      rh       "tsread0"                   "ts in file 0"                      "m s-1"      
state    real  tsread1              ij      misc        1         -      rh       "tsread1"                   "ts in file 1"                      "m s-1"      
state    real  cdread0              ij      misc        1         -      rh       "cdread0"                   "cd in file 0"                      "m s-1"      
state    real  cdread1              ij      misc        1         -      rh       "cdread1"                   "cd in file 1"                      "m s-1"      

rconfig   integer   jss_sfcwrap        namelist,dynamics     1               0    h    "" ""
rconfig   integer   jss_atmwrap        namelist,dynamics     1               0    h    "" ""

rconfig   integer   jss_wrapsh		   namelist,dynamics     1               0    h    "" ""
rconfig   integer   jss_wraplh         namelist,dynamics     1               0    h    "" ""
rconfig   integer   jss_wrapust        namelist,dynamics     1               0    h    "" ""
rconfig   integer   jss_wrapcm         namelist,dynamics     1               0    h    "" ""
rconfig   integer   jss_wraptsk        namelist,dynamics     1               0    h    "" ""
rconfig   integer   jss_wraprad        namelist,dynamics     1               0    h    "" ""
rconfig   integer   jss_wrapalbedo     namelist,dynamics     1               0    h    "" ""
rconfig   integer   jss_wrapemiss      namelist,dynamics     1               0    h    "" ""
rconfig   integer   jss_wrap210m       namelist,dynamics     1               0    h    "" ""
rconfig   integer   jss_wrapvarsfc     namelist,dynamics     1               0    h    "" ""

rconfig   integer   jss_starthour        namelist,dynamics     1               0    h    "" ""
rconfig   integer   jss_startday         namelist,dynamics     1               0    h    "" ""
rconfig   integer   jss_startmonth         namelist,dynamics     1               0    h    "" ""

rconfig   real      jss_minhfx         namelist,dynamics     1               0    h    "" ""
rconfig   real      jss_minwind        namelist,dynamics     1               0    h    "" ""

rconfig   integer   jss_altiso         namelist,dynamics     1               0    h    "" ""
rconfig   integer   jss_kv31           namelist,dynamics     1               0    h    "" ""

rconfig   integer   jss_crmcor         namelist,dynamics     1               0    h    "" ""
rconfig   integer   jss_crmlat         namelist,dynamics     1               0    h    "" ""
rconfig   integer   jss_crmzw         namelist,dynamics     1               0    h    "" ""

rconfig   real    jss_debug_r1         namelist,dynamics     1               0    h    "general debugging real" ""
rconfig   real    jss_debug_r2         namelist,dynamics     1               0    h    "general debugging real" ""
rconfig   real    jss_debug_r3         namelist,dynamics     1               0    h    "general debugging real" ""
rconfig   real    jss_debug_r4         namelist,dynamics     1               0    h    "general debugging real" ""
rconfig   real    jss_debug_r5         namelist,dynamics     1               0    h    "general debugging real" ""
rconfig   real    jss_debug_r6         namelist,dynamics     1               0    h    "general debugging real" ""
rconfig   real    jss_debug_r7         namelist,dynamics     1               0    h    "general debugging real" ""
rconfig   real    jss_debug_r8         namelist,dynamics     1               0    h    "general debugging real" ""

rconfig   integer jss_debug_i1         namelist,dynamics     1               0    h    "general debugging int" ""
rconfig   integer jss_debug_i2         namelist,dynamics     1               0    h    "general debugging int" ""
rconfig   integer jss_debug_i3         namelist,dynamics     1               0    h    "general debugging int" ""
rconfig   integer jss_debug_i4         namelist,dynamics     1               0    h    "general debugging int" ""
rconfig   integer jss_debug_i5         namelist,dynamics     1               0    h    "general debugging int" ""
rconfig   integer jss_debug_i6         namelist,dynamics     1               0    h    "general debugging int" ""
rconfig   integer jss_debug_i7         namelist,dynamics     1               0    h    "general debugging int" ""
rconfig   integer jss_debug_i8         namelist,dynamics     1               0    h    "general debugging int" ""
