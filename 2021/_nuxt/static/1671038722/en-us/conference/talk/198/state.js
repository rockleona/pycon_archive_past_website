window.__NUXT__=(function(a,b,c){return {staticAssetsBase:"\u002F2021\u002F_nuxt\u002Fstatic\u002F1671038722",layout:"default",error:a,state:{sponsorsData:[],jobsData:[],schedulesData:[],keynotesData:[],youtubeInfo:[],speechesData:[],speechData:{id:198,begin_time:"2021-10-03T03:30:00Z",end_time:"2021-10-03T04:00:00Z",is_remote:false,location:"5-r1",youtube_id:"Nv02_FMfn1Y",title:"TronGisPy: Open Sourced Geo-Image Preprocessing Tool for Machine Learning",category:"ML",language:"ZHEN",python_level:"INTERMEDIATE",recording_policy:b,abstract:"The talk will introduce TronGisPy using two use cases, Crop Farmland Classification and Forest Tree Types Classification. TronGisPy is an image preprocessing tool for machine learning and developed to master GIS imagery’s peculiarities. Often, the enormous size of images and inconsistency of datatype or bands (e.g. float or 16-bit integer) are primary challenges; yet, data scarcity (e.g. one per week) remains as the major limitation. This highlights TronGisPy’s capability to process the GIS images for general ML models. The popular functions used in both use cases will be introduced such as plotting, cliping, mapping, proojection, spliting and terrain analysis functions. For more functions in TronGisPy, please refer to: https:\u002F\u002Fgithub.com\u002Fthinktron\u002FTronGisPy.",detailed_description:"### TronGisPy Introduction\r\nTronGisPy ([GitHub](https:\u002F\u002Fgithub.com\u002Fthinktron\u002FTronGisPy)) aims to automate the whole GIS process on raster data using python interface. To get start, please see [GettingStarted.ipynb](https:\u002F\u002Fgithub.com\u002Fthinktron\u002FTronGisPy\u002Fblob\u002Fmaster\u002FGettingStarted.ipynb). The main module are listed below:\r\n\r\n- **Raster**: This module is Main class in TronGisPy. Use `ras = tgp.read_raster('\u003Cfile_path\u003E')` to read the file as Raster object. A Raster object contains all required attribute for a gis raster file such as *.tif* or *.geotiff* file including digital number for each pixel (`ras.data`), number of rows (`ras.rows`), number of columns (`ras.cols`), number of bands (`ras.bands`), geo_transform (`ras.geo_transform`), projection (`ras.projection`), no_data_value and metadata. The Raster object can also be plot with GeoDataFrame(shapefile) on the same canvas using `ras.plot()`. Functions like `ras.reproject()`, `ras.remap()` and `ras.refine_resolution()` are useful functions.\r\n\r\n- **CRS**: Convert the projection sys between well known text (WKT) and epsg(`tgp.epsg_to_wkt`, `tgp.wkt_to_epsg`). Convert the indexing sys tem between numpy index and coordinate system(`tgp.coords_to_npidxs`, `tgp.npidxs_to_coords`).\r\n\r\n- **ShapeGrid**: Interaction between raster and vector data including `tgp.ShapeGrid.rasterize_layer`, `tgp.ShapeGrid.rasterize_layer_by_ref_raster`, `tgp.ShapeGrid.vectorize_layer`, `tgp.ShapeGrid.clip_raster_with_polygon` and `tgp.ShapeGrid.clip_raster_with_extent`.\r\n\r\n- **DEMProcessor**: General dem processing functions including `tgp.DEMProcessor.dem_to_hillshade`, `tgp.DEMProcessor.dem_to_slope`, `tgp.DEMProcessor.dem_to_aspect`, `tgp.DEMProcessor.dem_to_TRI`, `tgp.DEMProcessor.dem_to_TPI` and `tgp.DEMProcessor.dem_to_roughness`.\r\nnormalizer.\r\n- **Interpolation**: Interpolation for raster data on specific cells which are usually nan cells. Once majority or mean value in the filter (convolution) are prefered value for interpolation, `tgp.Interpolation.majority_interpolation`, `tgp.Interpolation.mean_interpolation` are written in numba to speed up the process. If Inverse Distance Weight (IDW) method is appropriate, `tgp.Interpolation.gdal_fillnodata` impolemented by GDAL can be called.\r\n\r\n- **Normalizer**: Normalize the Image data for model training or plotting. Normalizer can be initialize from `normalizer = tgp.Normalizer()`. Function `normalizer.fit_transform()` can help to normalize the data. Function `normalizer.clip_by_percentage` can be used to clip the head and tail of the data to avoid the outlier affecting plotting.\r\n\r\n- **SplittedImage**: Split raster images for machine learning model training. Use `splitted_image = tgp.SplittedImage(raster, box_size, step_size=step_size)` to initialize SplittedImage object. SplittedImage object have `n_steps_h`, `n_steps_w`, `padded_rows`, `padded_cols`, `shape`, `n_splitted_images`, `padded_image` attributes. Function `splitted_image.apply()` can be used to process all splitted images using the funtion. Function `splitted_image.get_geo_attribute()` helps to get the vector of all splitted images and return GeoDataFrame object. When the prediction on each image is done, `splitted_image.write_splitted_images()` can be called to combine the prediction results on each splitted images to have the same size as original raster image.\r\n\r\n- **TypeCast**: Mapping the data type betyween gdal and numpy, and convert the gdal data type from integer to readable string. Because gdal use integer to represent defferent data types, `tgp.get_gdaldtype_name()` helps to convert the integer to its data type name in string. Also, once converting the data type between numpy and gdal is required, `tgp.gdaldtype_to_npdtype` and `tgp.npdtype_to_gdaldtype` can help.\r\n\r\n- **io**: Create, read and update the raster from the raster file. Use `tgp.read_raster` to read raster file as Raster object. Functions `tgp.get_raster_info` and `tgp.get_raster_extent` can be used when you don't want to read all digital value of the raster into the memory. Function `tgp.update_raster_info` can used to update the infomation of the raster file such as projection and geo_transform. Finally, if you want to get the testing file, `tgp.get_testing_fp` can help.",slide_link:c,slido_embed_link:"https:\u002F\u002Fapp.sli.do\u002Fevent\u002Ffwlfl5i8",hackmd_embed_link:"https:\u002F\u002Fhackmd.io\u002F@pycontw\u002FS1JfO75GF\u002Fedit",speakers:[{thumbnail_url:"https:\u002F\u002Ftw.pycon.org\u002Ftemp\u002Fmedia\u002Fcache\u002F6d\u002F8f\u002F6d8f509217e1d160a916b0e301c41aa9.jpg",name:"王選仲",github_profile_url:"https:\u002F\u002Fgithub.com\u002FGoatWang",twitter_profile_url:c,facebook_profile_url:"https:\u002F\u002Fwww.facebook.com\u002Fjeremy45555\u002F",bio:"Innovative and motivated AI engineer with strong integration and problem-solving skills. Focusing on computer vision & time-series machine learning research and implementation, especially in the GIS & remote sensing field, for 3 years.\r\n\r\n2+ years’ industry experience in helping enterprises import AI functions in their business flow. Enterprises include CPC corporation Taiwan(台灣中油), Chinese Society Of Photogrammetry & Remote Sensing(中華航測學會), New Taipei City Fire Department(新北消防局), Taiwan Forestry Bureau Aerial Survey Office(台灣農航所) and Sinotech Engineering Consultants (中興工程顧問社)\r\n\r\nBachelor’s degree experience in public finance and 5+ years’ experience in debate club. In addition, proficient in business process flows, in logical thinking and in oral presentation."}],event_type:"talk"},i18n:{routeParams:{}}},serverRendered:b,routePath:"\u002Fen-us\u002Fconference\u002Ftalk\u002F198",config:{gtm:{id:void 0},_app:{basePath:"\u002F2021\u002F",assetsPath:"\u002F2021\u002F_nuxt\u002F",cdnURL:a}}}}(null,true,""));