var Task = new function()
{

    this.view = function(projectId, taskId, preProcess, success, error)
    {
        if (!Util.isNullOrUndefined(preProcess))
        {
            preProcess();
        }

        $.ajax({
            url: '/api/task/view',
            type: 'GET',
            data: { project: projectId, task: taskId },
            dataType: 'json',
            success: function(response)
            {
                var wr = new WebResponse().parse(response);

                if (!Util.isNullOrUndefined(success))
                {
                    success(wr);
                }
            },
            error: function()
            {
                if (!Util.isNullOrUndefined(error))
                {
                    error();
                }
            }
        });
    };

    this.run = function(projectId, taskId, preProcess, success, error)
    {
        if (!Util.isNullOrUndefined(preProcess))
        {
            preProcess();
        }

        $.ajax({
            url: '/api/task/run',
            type: 'GET',
            data: { project: projectId, task: taskId },
            dataType: 'json',
            success: function(response)
            {
                var wr = new WebResponse().parse(response);

                if (!Util.isNullOrUndefined(success))
                {
                    Util.callAfterDelay(function () {
                        success(wr);
                    });
                }
            },
            error: function()
            {
                if (!Util.isNullOrUndefined(error))
                {
                    Util.callAfterDelay(function () {
                        error();
                    });
                }
            }
        });
    };
    
};