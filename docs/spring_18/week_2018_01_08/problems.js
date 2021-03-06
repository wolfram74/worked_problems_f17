var problems = [

  {
    location:`Current events`,
    description:"come to some conclusions about the drag on a dipole magnet in a uniform plasma flow.",
    steps:[
    {
      expression: `
        n=n_e=n_i
        \\\\
        \\vec v=v_e=v_i=v_0\\hat z
        \\rightarrow
        \\vec J = 0`,
      explanation: "some assumptions about the nature of the plasma flow, that is is homogeneous and single speed. "
    },
    {
      expression: `
      \\vec v(t=-\\infty)= v_0\\hat z = \\vec v_i
      \\\\
      \\vec v(t=\\infty) = v_0(\\alpha \\hat \\rho + \\beta \\hat z + \\gamma \\hat \\theta) = \\vec v_f
      \\\\
      \\alpha^2+\\beta^2+\\gamma^2=1
      `,
      explanation: "Some observations about velocity of a particle at some later point assuming a conservative potential that goes to 0 at large distances, if angular momentum is also conserved then $&\\gamma=0&$ as well. This will be justified later."
    },
    {
      expression: `
      \\frac{\\vec v_i \\cdot \\vec v_f}{v_0^2}=cos(\\theta_d) = \\beta
      \\\\
      (1-\\beta)v_0m=\\Delta p_z
      `,
      explanation: "Given the deflection angle how much momentum in the z axis is transferred to the dipole by a single particle."
    },
    {
      expression: `
      n v_0 m \\int_{0}^{\\infty}\\int_{0}^{2\\pi} b d\\theta db (1 - cos(\\theta_d(b) ) = F_{drag}
      `,
      explanation: "Assuming scattering potential is rotationally symmetric the deflection angle will depend only on the impact parameter, b. Integrating over all b's and multiplying by the density and initial momentum will determine total drag on the dipole."
    },
    {
      expression: `\\vec A = A_{\\theta_e} =
      M \\frac{\\mu_0 }{4\\pi}\\frac{sin(\\theta_p)}{r^2}
      `,
      explanation: "equation 3.7.22 from gurnett and bhattacharjee (G+B) describing the vector potential of a dipole. the subscripts on thetas denote equatorial angle and polar angle respectively."
    },
    {
      expression: `
      z = cos(\\theta_p) r, \\rho = sin(\\theta_p)r, \\theta = \\theta_e
      \\rightarrow
      \\\\
      \\vec A
      = A_\\theta
      = M \\frac{\\mu_0 }{4\\pi}\\frac{sin(\\theta_p)}{r^2}
      = M \\frac{\\mu_0 }{4\\pi}\\frac{\\rho}{r^3}
      \\\\
      = M \\frac{\\mu_0 }{4\\pi}\\frac{\\rho}{(z^2+\\rho^2)^{3/2}}
      `,
      explanation: "Recasting the potential in cylindrical coordinates"
    },
    {
      expression: `
      L= KE-PE =
      \\\\
      \\frac{1}{2}m(\\dot z ^2 + \\dot \\rho ^2 + \\rho ^2 \\dot \\theta^2)
      -q\\rho \\dot \\theta A_\\theta
      `,
      explanation: "Lagrangian for this system"
    },
    {
      expression: `
      \\partial_{\\dot e_i} L= p_{e_i}
      \\\\
      \\partial_{\\dot z} L= p_{z} = m \\dot z
      \\\\
      \\partial_{\\dot \\rho} L= p_{\\rho} = m \\dot \\rho
      \\\\
      \\partial_{\\dot \\theta} L= p_{\\theta} =
      m \\rho ^2 \\dot \\theta - q \\rho A_\\theta
      `,
      explanation: "Finding the conjugate momenta for our coordinate system"
    },
    {
      expression: `
      \\dot z
      = p_{z}/m
      \\\\
      \\dot \\rho
      = p_{\\rho}/m
      \\\\
      \\dot \\theta
      = (p_{\\theta}+q \\rho A_\\theta)\\frac{1}{m\\rho^2}
      = \\frac{p_{\\theta}+q \\rho A_\\theta}{m\\rho^2}
      \\\\
      `,
      explanation: "Velocities for substituing later"
    },
    {
      expression: `
      H= KE+PE =
      \\\\
      \\frac{1}{2}m(\\dot z ^2 + \\dot \\rho ^2 + \\rho ^2 \\dot \\theta^2)
      +q\\rho \\dot \\theta A_\\theta
      =
      \\\\
      \\frac{1}{2}m(
        (p_{z}/m) ^2
        + (p_{\\rho}/m) ^2
        + \\rho ^2 (\\frac{p_{\\theta}+q \\rho A_\\theta}{m\\rho^2})^2
        )
      +q\\rho (\\frac{p_{\\theta}+q \\rho A_\\theta}{m\\rho^2}) A_\\theta
      =
      \\\\
      \\frac{1}{2m}(
        p_{z}^2
        + p_{\\rho} ^2
        )
      + \\frac{m\\rho ^2}{2} (\\frac{p_{\\theta}+q \\rho A_\\theta}{m\\rho^2})^2
      + q\\rho (\\frac{p_{\\theta}+q \\rho A_\\theta}{m\\rho^2}) A_\\theta
      =
      \\\\
      \\frac{1}{2m}(
        p_{z}^2
        + p_{\\rho} ^2
        )
      +(
        \\frac{m\\rho ^2}{2} \\frac{p_{\\theta}+q \\rho A_\\theta}{m\\rho^2}
        + q\\rho  A_\\theta
        ) (
        \\frac{p_{\\theta}+q \\rho A_\\theta}{m\\rho^2}
        )
      =
      \\\\
      \\frac{1}{2m}(
        p_{z}^2
        + p_{\\rho} ^2
        )
      +
      \\frac{1}{2}
      (
        p_{\\theta}+q \\rho A_\\theta
        + \\frac{q\\rho  A_\\theta}{2}
        ) (
        \\frac{p_{\\theta}+q \\rho A_\\theta}{m\\rho^2}
        )
      =
      \\\\
      \\frac{1}{2m}(
        p_{z}^2
        + p_{\\rho} ^2
        +
        (
          p_{\\theta}
          + \\frac{3q\\rho  A_\\theta}{2}
        ) (
          \\frac{p_{\\theta}+q \\rho A_\\theta}{\\rho^2}
        )
      )
      `,
      explanation: "Expressing the Hamiltonian in terms of momenta"
    },
    {
      expression: `
      \\Psi
      =
        (
          p_{\\theta}
          + \\frac{3q\\rho  A_\\theta}{2}
        ) (
          \\frac{p_{\\theta}+q \\rho A_\\theta}{\\rho^2}
        ) =
        (
          3 q^2 A_\\theta^2 \\rho^2
          + 5 p_\\theta A_\\theta \\rho
          + 2 p_\\theta^2)\\frac{1}{2\\rho^2}
      \\\\
      =
        (
          p_{\\theta}
          + \\frac{3q\\rho}{2}(M \\frac{\\mu_0 }{4\\pi}\\frac{\\rho}{(z^2+\\rho^2)^{3/2}})
        ) (
          \\frac{1}{\\rho^2}
          (p_{\\theta}+q \\rho (M \\frac{\\mu_0 }{4\\pi}\\frac{\\rho}{(z^2+\\rho^2)^{3/2}}))
        )
      \\\\
      =
      (\\frac{3 M^{2} \\mu_{0}^{2} q^{2} \\rho^{2}}{32 \\pi^{2} \\left(\\rho^{2} + z^{2}\\right)^{3}}
      + \\frac{5 M \\mu_{0} p_{\\theta} q}{8 \\pi \\left(\\rho^{2} + z^{2}\\right)^{\\frac{3}{2}}}
      + \\frac{p_{\\theta}^{2}}{\\rho^{2}})
      \\\\
      \\gamma = \\frac{M \\mu_0 q}{\\pi}
      `,
      explanation: "explore and expanding the psudeo potential and defining a convenient place holder"
    },
    {
      expression: `
      \\partial_t p_{e_i} = \\partial_{q_{e_i}} H
      \\\\
      \\partial_t p_{\\rho} = \\partial_{\\rho} H =
      - \\frac{3 M^{2} \\mu_{0}^{2} q^{2} \\rho^{3}}{8 \\pi^{2} \\left(\\rho^{2} + z^{2}\\right)^{4}}
      + \\frac{3 M^{2} \\mu_{0}^{2} q^{2} \\rho z^{2}}{16 \\pi^{2} \\left(\\rho^{2} + z^{2}\\right)^{4}}
      - \\frac{15 M \\mu_{0} p_{\\theta} q \\rho}{8 \\pi \\left(\\rho^{2} + z^{2}\\right)^{\\frac{5}{2}}}
      - \\frac{2 p_{\\theta}^{2} z^{2}}{\\rho^{5} + \\rho^{3} z^{2}}
      - \\frac{2 p_{\\theta}^{2}}{\\rho^{3} + \\rho z^{2}} =
      \\\\
      - \\frac{3 \\gamma^{2} \\rho^{3}}{8 \\left(\\rho^{2} + z^{2}\\right)^{4}}
      + \\frac{3 \\gamma^{2} \\rho z^{2}}{16 \\left(\\rho^{2} + z^{2}\\right)^{4}}
      - \\frac{15 \\gamma p_{\\theta} \\rho}{8 \\left(\\rho^{2} + z^{2}\\right)^{\\frac{5}{2}}}
      - \\frac{2 p_{\\theta}^{2} z^{2}}{\\rho^{5} + \\rho^{3} z^{2}}
      - \\frac{2 p_{\\theta}^{2}}{\\rho^{3} + \\rho z^{2}}
      \\\\
      \\partial_t p_{z} = \\partial_{q_z} H =
      - \\frac{
        3 \\gamma z
      }{
        16 \\pi \\left(\\rho^{2} + z^{2}\\right)^{4}
      } \\left(
        3 \\pi \\gamma \\rho^{2} + 10 \\pi p_{\\theta} \\left(\\rho^{2} + z^{2}\\right)^{\\frac{3}{2}}
        \\right)
      \\\\
      \\partial_t p_{\\theta} = \\partial_{\\theta} H =0
      \\\\
      `,
      explanation: "The Equations of motion for our system. Note that $&p_\\theta&$ is invariant in time."
    },
    {
      expression: `
      \\partial_t p_{\\rho} =
      \\frac{3 \\gamma^{2} \\rho z^{2}}{16 \\left(\\rho^{2} + z^{2}\\right)^{4}}
      - \\frac{3 \\gamma^{2} \\rho^{3}}{8 \\left(\\rho^{2} + z^{2}\\right)^{4}}
      =
      \\\\
      \\frac{3 \\gamma^{2} \\rho z^{2}}{16 \\left(\\rho^{2} + z^{2}\\right)^{4}}
      - \\frac{6 \\gamma^{2} \\rho^{3}}{16 \\left(\\rho^{2} + z^{2}\\right)^{4}}
      =
      \\\\
      \\frac{
        3 \\gamma^{2} \\rho(
          z^{2}
          -2 \\rho^{2}
          )
      }{16 \\left(\\rho^{2} + z^{2}\\right)^{4}}
      \\\\
      \\partial_t p_{z} =
      - \\frac{
        3 \\gamma z
      }{
        16 \\pi \\left(\\rho^{2} + z^{2}\\right)^{4}
      } \\left(
        3 \\pi \\gamma \\rho^{2}
        \\right)
      =
      - \\frac{
        9 \\gamma^2 z  \\rho^{2}
      }{
        16  \\left(\\rho^{2} + z^{2}\\right)^{4}
      }
      `,
      explanation: "Taking some of our assumptions about initial conditions and applying them to generate simpler equations of motion."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    ]
  },

  {
    location:`own notion`,
    description:"Convert a vector field from polar coordinates to cylindrical",
    steps:[
    {
      expression: `
        \\vec V =
        V_{\\rho} \\hat \\rho
        +V_{z} \\hat z
        +V_{\\theta} \\hat \\theta
        \\\\
        =V_{r} \\hat r
        +V_{\\theta_p} \\hat \\theta_p
        +V_{\\theta_e} \\hat \\theta_e
        \\\\
        =
        V_{x} \\hat x
        +V_{y} \\hat y
        +V_{z} \\hat z
        `,
      explanation: "A vector field can be expressed equivalently in any orthonormal coordinate system"
    },
    {
      expression: `
      V_x
      =
      \\vec V \\cdot \\hat x
      =
      V_{r} \\hat r \\cdot \\hat x
      +V_{\\theta_p} \\hat \\theta_p \\cdot \\hat x
      +V_{\\theta_e} \\hat \\theta_e \\cdot \\hat x
      \\\\
      =
      V_{r}
      (
        f_{xr}(r, \\theta_p, \\theta_p)\\hat x+
        f_{yr}(r, \\theta_p, \\theta_p)\\hat y+
        f_{zr}(r, \\theta_p, \\theta_p)\\hat z
      )
      \\cdot \\hat x
      \\\\
      +V_{\\theta_p}
      (
        f_{x\\theta_p}(r, \\theta_p, \\theta_p)\\hat x+
        f_{y\\theta_p}(r, \\theta_p, \\theta_p)\\hat y+
        f_{z\\theta_p}(r, \\theta_p, \\theta_p)\\hat z
      )
      \\cdot \\hat x
      \\\\
      +V_{\\theta_e}
      (
        f_{x\\theta_e}(r, \\theta_p, \\theta_p)\\hat x+
        f_{y\\theta_e}(r, \\theta_p, \\theta_p)\\hat y+
        f_{z\\theta_e}(r, \\theta_p, \\theta_p)\\hat z
      )
      \\cdot \\hat x
      `,
      explanation: "determining a vector component in cartesian components from spherical. Expressions for decomposing the source unit vectors in terms of the target unit vectors are needed."
    },
    {
      expression: `
      \\begin{bmatrix}
        \\hat z \\\\
        \\hat \\rho \\\\
        \\hat  \\theta
      \\end{bmatrix}
      =
      \\begin{bmatrix}
        cos(\\theta_p)
        & -sin(\\theta_p)
        & 0
        \\\\
        sin(\\theta_p)
        & cos(\\theta_p)
        & 0
        \\\\
        0
        & 0
        & 1
      \\end{bmatrix}
      \\begin{bmatrix}
        \\hat r \\\\
        \\hat \\theta_{p} \\\\
        \\hat \\theta_{e}
      \\end{bmatrix}
      \\\\
      \\begin{bmatrix}
        \\hat r \\\\
        \\hat \\theta_{p} \\\\
        \\hat \\theta_{e}
      \\end{bmatrix}
      =
      \\begin{bmatrix}
        cos(\\theta_p)
        & sin(\\theta_p)
        & 0
        \\\\
        -sin(\\theta_p)
        & cos(\\theta_p)
        & 0
        \\\\
        0
        & 0
        & 1
      \\end{bmatrix}
      \\begin{bmatrix}
        \\hat z \\\\
        \\hat \\rho \\\\
        \\hat  \\theta
      \\end{bmatrix}
      `,
      explanation: "A transformation from spherical unit vectors to cylindrical, that it is obviously unitary supports the notion that it preserves orthonormality."
    },
    {
      expression: `\\vec V =
        V_{r} \\hat r
        +V_{\\theta_p} \\hat \\theta_p
        +V_{\\theta_e} \\hat \\theta_e
        =
        \\\\
        V_{r} (cos(\\theta_p ) \\hat z + sin(\\theta_p ) \\hat \\rho )
        +V_{\\theta_p} (-sin(\\theta_p ) \\hat z + cos(\\theta_p ) \\hat \\rho )
        +V_{\\theta_e} (1 \\hat \\theta)
        =
        \\\\
      `,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `
      V_{z}
      = V_{r}cos(\\theta_p)-V_{\\theta_p}sin(\\theta_p)
      \\\\
      V_{x}
      = (V_{r}sin(\\theta_p)+V_{\\theta_p}cos(\\theta_p))cos(\\theta_e)
      -V_{\\theta_e}sin(\\theta_e)
      \\\\
      V_{y}
      = -(V_{r}sin(\\theta_p)+V_{\\theta_p}cos(\\theta_p))sin(\\theta_e)
      +V_{\\theta_e}cos(\\theta_e)
      `,
      explanation: "A spherical vector field recast in cartesian coordinates"
    },
    {
      expression: `
      \\begin{bmatrix}
        \\rho \\\\
        \\theta \\\\
        z
      \\end{bmatrix}
      =
      \\begin{bmatrix}
        r sin(\\theta_{p}) \\\\
        \\theta_{e} \\\\
        r cos(\\theta_{p})
      \\end{bmatrix}
      ,
      \\begin{bmatrix}
        r \\\\
        \\theta_{\\theta_p} \\\\
        \\theta_{\\theta_e}
      \\end{bmatrix}
      =
      \\begin{bmatrix}
        (\\rho^2+z^2)^{1/2} \\\\
        atan(z/\\rho) \\\\
        \\theta
      \\end{bmatrix}

      `,
      explanation: "Expressions for cylindrical coordinates in terms of spherical"
    },
    {
      expression: `
      \\begin{bmatrix}
        \\hat \\rho \\\\
        \\hat  \\theta \\\\
        \\hat z
      \\end{bmatrix}
      =
      \\begin{bmatrix}
        \\partial_{ r } \\rho
        & \\partial_{ \\theta_{p} } \\rho
        & \\partial_{ \\theta_{e} } \\rho
        \\\\
        \\partial_{ r } \\theta
        & \\partial_{ \\theta_{p} } \\theta
        & \\partial_{ \\theta_{e} } \\theta
        \\\\
        \\partial_{ r } z
        & \\partial_{ \\theta_{p} } z
        & \\partial_{ \\theta_{e} } z
      \\end{bmatrix}
      \\begin{bmatrix}
        \\hat r \\\\
        \\hat \\theta_{p} \\\\
        \\hat \\theta_{e}
      \\end{bmatrix}
      =
      \\begin{bmatrix}
        sin(\\theta_{p})
        & r cos(\\theta_{p})
        & 0
        \\\\
        0
        & 0
        & 1
        \\\\
        cos(\\theta_{p})
        & -r sin(\\theta_{p})
        & 0
      \\end{bmatrix}
      \\begin{bmatrix}
        \\hat r \\\\
        \\hat \\theta_{p} \\\\
        \\hat \\theta_{e}
      \\end{bmatrix}
      `,
      explanation: "A transformation from spherical unit vectors to cylindrical, the jacobian of which is simply r, as appropriate for cylindrical coordinates"
    },
    {
      expression: `
      \\begin{bmatrix}
        V_\\rho \\\\
        V_\\theta \\\\
        V_z
      \\end{bmatrix}
      =
      \\begin{bmatrix}
        sin(\\theta_{p})
        & r cos(\\theta_{p})
        & 0
        \\\\
        0
        & 0
        & 1
        \\\\
        cos(\\theta_{p})
        & -r sin(\\theta_{p})
        & 0
      \\end{bmatrix}
      \\begin{bmatrix}
        V_r \\\\
        V_{\\theta_{p}} \\\\
        V_{\\theta_{e}}
      \\end{bmatrix}
      =
      \\begin{bmatrix}
        sin(\\theta_{p})V_r
        +r cos(\\theta_{p})V_{\\theta_{p}}
        +0 V_{\\theta_{e}}
        \\\\
        V_{\\theta_{p}}
        \\\\
        V_{\\theta_{e}}
      \\end{bmatrix}
      `,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },]
  },

  {
    location:`NA`,
    description:"NA",
    steps:[
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },]
  },
]
