cmd_Release/vibrancy.node := c++ -bundle -undefined dynamic_lookup -Wl,-no_pie -Wl,-search_paths_first -mmacosx-version-min=10.13 -arch x86_64 -L./Release -stdlib=libc++  -o Release/vibrancy.node  
